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
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon } from "lucide-react"

const instrumentsList = [
  'piano',
  'guitar',
  'bass',
  'drums',
  'vocalist',
  'saxophone',
  'trumpet',
  'trombone',
]

const bookingSchema = z.object({
  instruments: z.array(z.string()).min(1, 'Select at least one instrument'),
  date: z.date({message: 'Please choose a date for your event'}),
  startTime: z.string().min(1, 'Start time required'),
  endTime: z.string().min(1, 'End time required'),
  location: z.string().min(5, { message: 'Please enter an event location' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().optional()
})

type BookingFormValues = z.infer<typeof bookingSchema>

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    shouldUnregister: false, 
    defaultValues: {
      email: '',
      message: '',
      location: '',
      instruments: [],
      date: undefined,
      startTime: '18:00',
      endTime: '20:00',
    },
  })

  const nextStep = async () => {
    let fields: (keyof BookingFormValues)[] = []

    if (step === 1) fields = ['instruments']
    if (step === 2) fields = ['location', 'date', 'startTime', 'endTime']

    const valid = await form.trigger(fields)
    if (valid) setStep((s) => s + 1)
  }

  const prevStep = () => setStep((s) => s - 1)

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
      setStep(1)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg space-y-6 mt-4">

        {/* Step Indicator */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {[
            { id: 1, label: 'Your band' },
            { id: 2, label: 'Your event' },
            { id: 3, label: 'Your email' },
          ].map((s) => {
            const isActive = step === s.id
            const isComplete = step > s.id

            return (
              <div key={s.id} className="flex items-center justify-around w-full">
                <div className="flex flex-col items-center text-center w-full">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition 
                      ${isActive ? 'bg-slate-900 text-white' : ''}
                      ${isComplete ? 'bg-slate-900 text-amber-400' : ''}
                      ${!isActive && !isComplete ? 'bg-muted' : ''}`}
                  >
                    {isComplete ? '✓' : s.id}
                  </div>
                  <span className={`mt-1 ${isActive ? 'text-foreground font-medium' : ''}`}>
                    {s.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* STEP 1: Instruments */}
        {step === 1 && (
          <FormField
            control={form.control}
            name="instruments"
            render={({ field }) => (
              <FormItem className="gap-6">
                <FormControl>
                  <div className="grid grid-cols-2 gap-3">
                    {instrumentsList.map((inst) => {
                      const checked = field.value.includes(inst)
                      return (
                        <label
                          key={inst}
                          className={`border-2 rounded-lg p-3 cursor-pointer text-sm flex justify-center items-center gap-2 transition hover:border-blue-500 focus-within:border-blue-500 ${checked ? 'bg-slate-900 text-white border-slate-90  ' : 'hover:bg-muted focus-within:bg-muted '}`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, inst])
                              } else {
                                field.onChange(field.value.filter((v) => v !== inst))
                              }
                            }}
                            className="sr-only"
                          />
                          {inst.charAt(0).toUpperCase() + inst.slice(1)}
                        </label>
                      )
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* STEP 2: Date + Location */}
        {step === 2 && (
          <>
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

              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input type="time" className='py-6 shadow-none rounded-lg cursor-pointer' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input type="time" className='py-6 shadow-none rounded-lg cursor-pointer'{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where is your event?</FormLabel>
                  <FormControl>
                    <Input placeholder="The Chicago Hyatt..." className='py-6 shadow-none rounded-lg' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* STEP 3: Contact */}
        {step === 3 && (
          <>
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

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anything else we should know?</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Event details..." className='shadow-none rounded-lg' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-2">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep} className="font-boldrounded-full cursor-pointer">
              Back
            </Button>
          )}

          {step < 3 && (
            <Button type="button" onClick={nextStep} className="font-bold rounded-full cursor-pointer">
              Next
            </Button>
          )}

          {step === 3 && (
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="font-bold cursor-pointer text-white flex-1 rounded-full"
            >
              Get a Quote!
            </Button>
          )}
        </div>

        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>
    </Form>
  )
}
