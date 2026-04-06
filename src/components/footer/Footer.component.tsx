import Link from "next/link";

const footerLinks = [
  { href: "/chicago-jazz-band-weddings", label: "Weddings" },
  { href: "/chicago-jazz-band-corporate-events", label: "Corporate Events" },
  { href: "/jazz-soloist-chicago", label: "Jazz Soloist" },
  { href: "/jazz-duo-chicago", label: "Jazz Duo" },
  { href: "/jazz-trio-chicago", label: "Jazz Trio" },
  { href: "/jazz-quartet-chicago", label: "Jazz Quartet" },
  { href: "/jazz-cocktail-hour-chicago", label: "Cocktail Hour Jazz" },
  {
    href: "/how-much-does-a-jazz-band-cost-in-chicago",
    label: "Chicago Jazz Pricing Guide",
  },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t px-4 py-4 text-center text-sm text-gray-500">
      <div>© {new Date().getFullYear()} Chicago Jazz Assembly</div>
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
