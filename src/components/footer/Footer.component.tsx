import Link from "next/link";

const footerLinks = [
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t px-4 py-4 text-center text-sm text-gray-500">
      <div>© {new Date().getFullYear()} ChicagoBlesBands.com</div>
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
