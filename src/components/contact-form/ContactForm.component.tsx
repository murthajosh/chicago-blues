'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const contactSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(5, { message: 'Message must be at least 5 characters' }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setStatus('Sending...')

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (res.ok) {
      form.reset()
      setStatus('Message sent. We will be in touch shortly.')
    } else {
      setStatus('Failed to send.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col w-full bg-transparent">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" type="email" className='py-6 shadow-none rounded-lg' {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your date, venue, and the kind of vibe you want..." className='shadow-none rounded-lg' rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting} className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max text-center'>
          Send Message
        </Button>

        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>
    </Form>
  )
}
