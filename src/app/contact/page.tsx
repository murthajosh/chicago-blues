import { ContactForm } from '@/components/contact-form/ContactForm.component'
// import styles from './contactPage.module.scss'

export default function ContactPage() {
  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <section id="hero" className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center mx-auto w-full rounded-xl p-6 max-w-4xl`}>
            <div className="flex flex-col gap-6 text-center md:text-left">
                <h1 className="flex flex-col gap-1 font-black text-5xl">
                    Let&apos;s talk.
                </h1>
                <h2 className='text-xl'>Drop us a line and we will get back to you soon!</h2>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg min-w-[324]">
                <ContactForm />
            </div>
        </section>
    </main>
  )
}
