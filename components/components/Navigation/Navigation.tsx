'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../Logo/Logo";

const links = [
  {
    href: "/",
    label: "Artykuły",
  },
  {
    href: "/autorzy",
    label: "Autorzy",
  },
  {
    href: "/projekty",
    label: "Projekty",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
  },
];

export const Navigation = () => {
    const pathname = usePathname();

  return (
    <div className="component-border-bottom flex font-jost text-[16px] h-[50px]">
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          margin: "0 30px",
        }}
      >
        <Logo className="mr-[20px]" height={25} />
        {links.map(({ href, label }) => (
          <Link className={
            pathname === href ? "font-medium" : undefined
          } key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
