"use client"
interface category {
    slug: string,
    id: string,
    nameBn: string
    icon: string
}
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavlinksActive = ({n}:{n:category}) => {
    const pathname = usePathname();
    const isActive = pathname === `/catagory/${n.slug}`

    return (
        <Link href={`/catagory/${n.slug}`} className={`font-bold text-md transition-colors ${
        isActive
          ? "text-green-600 border-b-2 border-green-600"
          : "text-gray-700 hover:text-green-600"
      }`}>{n.icon}{n.nameBn}</Link>
    );
};

export default NavlinksActive;