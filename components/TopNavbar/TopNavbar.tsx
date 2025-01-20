'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from '@/components';
import { FrameworkLogo } from "../FrameworkLogo/FrameworkLogo";

import styles from "./TopNavbar.module.css";

export const TopNavbar = ({ items = [] }: any) => {
  const pathname = usePathname();

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
        <div className="flex items-center gap-[15px]">
          <Logo height={25} />
          <div className={styles.divSeparator}></div>
          <FrameworkLogo width={75} />
        </div>

        {items.map(({ url, name }: any) => (
          <Link
            key={url || null}
            href={url || null}
            className={pathname === url ? "font-medium" : ''}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
