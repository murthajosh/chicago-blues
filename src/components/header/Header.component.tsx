import Link from "next/link";
import Image from "next/image";
import cbaShort from '../../../public/assets/img/cbaShort.svg'
import cbaLong from '../../../public/assets/img/cbaLong.svg'

const Header = () => {
    return(
        <header className="w-full mx-auto px-4 py-4 flex justify-between items-center gap-4 backdrop-blur-lg sticky top-0 z-50">
            <Link href="/" className="hidden md:block" >
              <Image 
                src={cbaLong}
                height={40}
                alt="chicago blues assembly logo"
              />
            </Link>
            <Link href="/" className="md:hidden font-black">
              <Image 
                src={cbaShort}
                height={40}
                alt="chicago blues assembly logo"
              />
            </Link>
            <div className="flex gap-8 items-center">
              {/* <ThemeToggle /> */}
              {/* <Dialog>
                <DialogTrigger className="font-black cursor-pointer">Pricing</DialogTrigger>
                <DialogContent className="sm:max-w-md w-full">
                  <DialogHeader>
                    <DialogTitle className="font-black text-2xl">Our pricing is simple and transparent.</DialogTitle>
                    <DialogDescription className="flex flex-col gap-4 py-6 text-base">
                      <span className="text-primary font-bold">$200/performer per hour required on-site*.</span>
                      <span className="text-primary">plus</span>
                      <span className="text-primary font-bold">$2/performer per mile outside Cook County, IL.</span>
                    </DialogDescription>
                    <hr />
                  </DialogHeader>
                    <DialogFooter>
                      <span className="text-sm">* 'Hours-on-site' explained: Unlike larger party bands with elaborate sound and lighting systems, blues bands travel light. We can swoop in just before the event and vanish in a flash when the event is over, so we don’t build in any setup or tear down time into our pricing. But sometimes clients need us in place early so we can be out of the way during meals, speeches, or other event activities. In these special cases, to compensate performers fairly for their time, we bill based on the total time a client needs us set up and ready.</span>
                    </DialogFooter>
                </DialogContent>
              </Dialog> */}
              <Link href='/pricing' className="font-bold hover:underline">
              Pricing
              </Link>
              <Link
                href='/contact'
                className={`text-sm cursor-pointer font-bold px-4 py-2 w-max rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-700 text-white hover:scale-110`}
              >
                Contact
              </Link>
            </div>
        </header>
    )
}

export default Header;