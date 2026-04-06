
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";


export default function Pricing() {
  return (
      <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
            <h1 className="font-bold text-3xl">Our pricing is simple & transparent:</h1>
            <ul className="sm:text-2xl flex flex-col gap-3 font-bold my-3 mx-auto">
                <li>$200 per performer / hour on-site</li>
                <li>+$2 per performer / mile outside Cook County</li>
            </ul>
            <p>No packages. No hidden fees. Just great jazz musicians at a clear hourly rate. 
            </p>
        <Link
            href='/'
            className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center'>
            Get Your Quote Today
        </Link>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">How Pricing Works</h2>

            <div>
                <h3 className="font-bold">1. Choose your band.</h3>
                <p>Build the custom jazz band for your event space and atmosphere, from solo guitar or piano all the way to an eight-piece swing band!</p>
            </div>

            <div>
                <h3 className="font-bold">2. Choose your time.</h3>
                <p>We bill based on hours on-site (explained below)</p>
            </div>
            <div>
                <h3 className="font-bold">3. Add travel (if applicable)</h3>
                <p>Only applies outside Cook County</p>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">Real Pricing Examples</h2>

            <div className="border-l-2 border-amber-400 ps-3">
                <h3 className="font-bold">Example 1: Wedding Cocktail Hour</h3>
                <ul className="ps-3 py-3">
                    <li>Jazz Trio (3 musicians x $200 = $600)</li>
                    <li>2 hours</li>
                    <li>Inside Cook County</li>
                </ul>
                <p className="font-bold">Total: $1,200</p>
            </div>

            <div className="border-l-2 border-amber-400 ps-3">
                <h3 className="font-bold">Example 2: Corporate Fundraiser</h3>
                <ul className="ps-3 py-3">
                    <li>Jazz Quartet (4 musicians x $200 = $800)</li>
                    <li>3 hours</li>
                    <li>Inside Cook County</li>
                </ul>
                <p className="font-bold">Total: $2,400</p>
            </div>

            <div className="border-l-2 border-amber-400 ps-3">
                <h3 className="font-bold">Example 3: Classic Wedding Reception</h3>
                <ul className="ps-3 py-3">
                    <li>Jazz Quintet (5 musicians x $200 = $1,000)</li>
                    <li>4 hours</li>
                    <li>20 miles outside Cook County (20 miles x $2 x 5 musicians = $200)</li>
                </ul>
                <p className="font-bold">Total: $4,200</p>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">What&apos;s Included</h2>

            <div className="border-l-2 border-green-400 ps-3">
                <h3 className="font-bold">Included with every booking:</h3>
                <ul className="ps-3 py-3 list-disc">
                    <li>Professional Chicago Jazz musicians who look great and sound even better!</li>
                    <li>Total flexibility to customize the band.</li>
                    <li>Free PA system available for announcements and speeches.</li>
                </ul>
            </div>

            <div className="border-l-2 border-red-400 ps-3">
                <h3 className="font-bold">You DON&apos;T need to worry about:</h3>
                <ul className="ps-3 py-3 list-disc">
                    <li>Hidden production fees</li>
                    <li>Renting a sound system</li>
                    <li>Feeding the band (we do not require band meals in our contracts.)</li>
                    <li>Validating parking (we cover this expense for our performers when needed.)</li>
                </ul>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">What &quot;Hours On-Site&quot; means</h2>

            <div className="flex flex-col gap-3">
                <p>Unlike large wedding bands with complex production, jazz ensembles are lightweight and flexible.</p>
                <p>We typically arrive shortly before playing and leave right after - so you’re only paying for the time you actually need music.</p>
                <p>If you’d like us set up early (for example, before guests arrive or during dinner transitions), we simply include that time in the hourly total so musicians are compensated fairly.</p>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">Sample Band Builds</h2>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Intimate Duo</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Jazz Vocalist + Guitar</li>
                        <li>Great for engagement parties & rehearsal dinners</li>
                        <li>A subtle backdrop to dinner conversation</li>
                        <li>Starting as low as $400</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max`}
                    >
                        Build this band
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Classic Jazz Trio</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Piano + Bass + Drums</li>
                        <li>Perfect for cocktail hours and networking events</li>
                        <li>A soundtrack for socializing</li>
                        <li>Starting as low as $600</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max`}
                    >
                        Build this band
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Swingin&apos; Sax Quartet</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Saxophone + Piano + Bass + Drums</li>
                        <li>Fuller sound, still elegant and unobtrusive</li>
                        <li>A bit more than background</li>
                        <li>Starting as low as $800</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max`}
                    >
                        Build this band
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Upscale Reception Quintet</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Trumpet + Sax + Piano + Bass + Drums</li>
                        <li>Powerful and lively</li>
                        <li>Delightfully danceable</li>
                        <li>Starting as low as $1000</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max`}
                    >
                        Build this band
                    </Link>
                </div>
            </div>
        </section>
        <FaqSection />
      </main>
  );
}