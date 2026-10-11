import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import HighProducts from "@/components/HighProducts";
import LowerProducts from "@/components/LowerProducts";
import { RicePrice } from "@/type/type";



export default async function Home() {

  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data = await res.json()
  const products:RicePrice[] = data;
  const highPriceProducts:RicePrice[] = products.filter(hp => hp.change.dir === 'up').sort((a,b)=>b.today - a.today);
  const lowerPriceProducts: RicePrice[] = products.filter(hp => hp.change.dir === 'down').sort((a,b)=>a.today - b.today)

  return (
    <div>
     <Banner/>

     {/* High Price Products */}
     <div className="mt-10 container mx-auto">

     <h2 className="font-bold text-3xl my-2"><span className="text-red-600">▲</span>আজ দাম বেড়েছে</h2>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {
        highPriceProducts.slice(0,6).map(highP => <HighProducts key={highP.id} highP={highP}></HighProducts>)
      }
    </div>
     
    </div>

    {/* Lower Price Products */}
     <div className="mt-10 container mx-auto">

     <h2 className="font-bold text-3xl my-2"><span className="text-[#682cf3]">▼</span>আজ দাম কমেছে</h2>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {
        lowerPriceProducts.slice(0,6).map(highP => <LowerProducts key={highP.id} highP={highP}></LowerProducts>)
      }
    </div>
     
    </div>

    {/* All Products */}
    <div className="mt-10 container mx-auto">

     <h2 className="font-bold text-3xl my-2">সব পণ্য</h2>
     <p>{`মোট ${products.length}টি পণ্য দেখানো হচ্ছে`}</p>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3  ">
      {
        products.map(product => <AllProducts key={product.id} product={product}></AllProducts>)
      }
    </div>
     
    </div>
    </div>
  );
}
