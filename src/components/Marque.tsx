import { RicePrice } from "@/type/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
const Marque = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const marquee: RicePrice[] = data

    return (
        <div className="mt-10 overflow-hidden">
            <div className="flex w-max items-center gap-6 border border-gray-100">
                <MarqueeText duration={70}
  pauseOnHover={true}
  direction="right">

            {
                marquee.map(m => <Link href={`/products/${m.id}`} key={m.id} className="flex shrink-0 items-center gap-2 whitespace-nowrap border-r pr-6 transition-opacity hover:opacity-75 hover:border-b-2 hover:border-green-500">
                    <span>
                        
                        <span>{m.image}{'  '}</span>
                    <span className="font-semibold">{m.nameBn }{' '}</span>
                     <span>{m.today}{' '}টাকা{' '}/{' '}{m.unit === "kg" ? "কেজি" : m.unit === "litre" ? "লিটার" : m.unit}{' '}</span>
                     <span className={`${m.change.dir == "down" ? "text-green-400":"text-red-600"}`}>{m.change.dir === "up" ? "▲" : "▼"}{" "}{Math.abs(m.change.pct).toLocaleString("bn-BD")}%</span>
                     <span></span>
                        </span> 
                     </Link>)
            }
            </MarqueeText>
        </div>
        </div>
    );
};

export default Marque;