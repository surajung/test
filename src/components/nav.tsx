import Link from "next/link";

const links = [
  { href: "/", label: "Store" },
  { href: "/login", label: "Login" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/orders", label: "Orders" },
  { href: "/settings", label: "Settings" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex h-11 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <span className="text-xs tracking-tight">test.surajung.com</span>
        <nav className="flex items-center gap-3 overflow-x-auto text-xs sm:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-zinc-200 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
