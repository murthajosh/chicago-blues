import { ContactForm } from '@/components/contact-form/ContactForm.component'
import styles from './contactPage.module.scss'

export default function ContactPage() {
  return (
    <section className={`${styles.pageWrapper} flex flex-col gap-1 justify-center items-center w-full mx-auto mt-4 bg-blue-400/5 backdrop-blur-md rounded-xl p-6 h-screen`}>
      <div className="flex flex-col gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl p-6 w-100">
        <h1 className="text-2xl font-bold">Let&apos;s talk about your event.</h1>
        <ContactForm />
      </div>
    </section>

  )
}
