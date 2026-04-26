'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from '@/components/ui/input'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { Button } from '@/components/ui/button'
import { ChevronDownIcon } from "lucide-react"

const bookingSchema = z.object({
  bandSize: z.number().int().min(1, 'Select at least one instrument'),
  hours: z.number().int().min(1, 'Select at least one instrument'),
  date: z.date({message: 'Please choose a date for your event'}),
  email: z.string().email({ message: 'Invalid email address' }),
})

type BookingFormValues = z.infer<typeof bookingSchema>

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    shouldUnregister: false, 
    defaultValues: {
      bandSize: 3,
      hours: 3,
      date: undefined,
      email: '',
    },
  })

  const bandSize = form.watch('bandSize')
  const hours = form.watch('hours')

  const estimatedQuote = bandSize * 200 * hours

  async function onSubmit(values: BookingFormValues) {
    setStatus('Sending...')
    console.log(values)
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        date: values.date?.toISOString(),
      })
    })

    setStatus(res.ok ? 'Message sent. Check your email soon to complete your booking!' : 'Failed to send.')

    if (res.ok) {
      form.reset()
    }
  }

  const getBandDescription = (size: number) => {
    switch (size) {
      case 1:
        return "Soloist - Perfect for intimate affairs."
      case 2:
        return "Duo - More engaging, but still subtle."
      case 3:
        return "Trio - Grooving but not overpowering. "
      case 4:
        return "Quartet - More evergetic and dynamic."
      case 5:
        return "Quintet - Perfect for small dance floors."
      case 6:
        return "Six-piece - When you want to start the party!"
      case 7:
        return "Seven-piece - Make a bold impression with more punch and excitement."
      case 7:
        return "Eight-piece - Horn-driven blues built for maximum impact."
      default:
        return "Pick the perfect sized band for your event."
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg space-y-6 mt-4">
      <h3 className="text-2xl font-bold text-center">Get your quote!</h3>
      <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Event Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-between font-normal w-full shadow-none p-6 rounded-lg cursor-pointer">
                    {field.value ? format(field.value, "PPP") : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
        control={form.control}
        name="bandSize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Band size</FormLabel>
            <FormControl>
            <InputGroup>
              <InputGroupInput
                type="number"
                min="1"
                max="8"
                placeholder='Number of musicians...'
                className="py-6 shadow-none rounded-lg"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText>Musician{bandSize > 1 && `s`}</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <p className='w-100'>{getBandDescription(bandSize)}</p>


      <FormField
        control={form.control}
        name="hours"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Performance length</FormLabel>
            <FormControl>
            <InputGroup>
              <InputGroupInput
                type="number"
                min="1"
                max="8"
                className="py-6 shadow-none rounded-lg"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText>Hour{hours > 1 && `s`}</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      

          
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" className='py-6 shadow-none rounded-lg' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="font-bold cursor-pointer text-white flex-1 rounded-full w-full text-lg p-8"
        >
          ${estimatedQuote.toLocaleString()} • Send My Quote!
        </Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>

    </Form>
  )
}
