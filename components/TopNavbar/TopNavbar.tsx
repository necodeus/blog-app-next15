'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from '@/components';

export const TopNavbar = ({ items = [] }: any) => {
  if (!items.length) {
    return null;
  }

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

        {items.map(({ url, name }: any) => (
          <Link
            key={url || ''}
            href={url || ''}
            className={usePathname() === url ? "font-medium" : ''}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
