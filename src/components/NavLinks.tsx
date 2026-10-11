import Link from "next/link";
import NavlinksActive from "./NavlinksActive";

interface category {
    slug: string,
    id: string,
    nameBn: string
    icon: string
}

const NavLinks = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    const navs:category[] = data;

    return (
        <div className="flex gap-2 md:gap-6 justify-center items-center mt-5">
            {
               navs.map(n => <NavlinksActive key={n.slug} n={n}/>) 
            }
        </div>
    );
};

export default NavLinks;