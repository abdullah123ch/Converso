'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navitems = [
    {name: "Home", href: "/"},
    {name: "Companions", href: "/companions"},
    {name: "My Journey", href: "my-journey"},
    {name: "Pricing", href: "/subscription"},
]

const Navitems = () => {
    const pathname = usePathname()
  return (
    <nav className="flex items-center gap-4">
        {navitems.map((item) => (
            <Link href={item.href} key={item.name} className={cn(pathname === item.href && "text-primary font-semibold")}>
                {item.name}
            </Link>
        ))}
    </nav>
  )
}

export default Navitems