import Link from "next/link";

const footerLinks = [
  { href: "/chicago-blues-band-weddings", label: "Weddings" },
  { href: "/chicago-blues-band-corporate-events", label: "Corporate Events" },
  { href: "/blues-soloist-chicago", label: "Blues Soloist" },
  { href: "/blues-duo-chicago", label: "Blues Duo" },
  { href: "/blues-trio-chicago", label: "Blues Trio" },
  { href: "/blues-quartet-chicago", label: "Blues Quartet" },
  { href: "/blues-cocktail-hour-chicago", label: "Cocktail Hour Blues" },
  {
    href: "/how-much-does-a-blues-band-cost-in-chicago",
    label: "Chicago Blues Pricing Guide",
  },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t px-4 py-4 text-center text-sm text-gray-500">
      <div>© {new Date().getFullYear()} Chicago Blues Assembly</div>
      <div className="mt-2 flex flex-wrap gap-4 justify-center">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
