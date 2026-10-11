interface RiceDetailsProps {
  params: Promise<{
    catagoryId: string;
  }>;
}
import NotFoundPage from "@/app/not-found";
import FilteredProducts from "@/components/FilteredProducs";
import { RicePrice } from "@/type/type";

const CategoryPage = async ({ params }:RiceDetailsProps) => {
  const { catagoryId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${catagoryId}`,
  );



  const data = await res.json();
  const products: RicePrice[] = data;
  const product: RicePrice = data[0];
  if(!products){
    <NotFoundPage/>
  }

  
  

  return (
    <div className="container mx-auto">
      <div className="my-6">
        {/* Item Icon Box */}
        <div className="w-full rounded-2xl bg-[#F9FAF8] p-5 shadow-sm border border-gray-200 flex flex-col justify-between font-sans text-gray-800 ">
          {/* Top Header Section */}
          <div className="flex items-center gap-3">
            {/* Item Icon Box */}
            <div className="w-14 h-14 bg-[#EEF4ED] rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-2xl" role="img" aria-label="onion">
                {product?.categoryIcon}
              </span>
            </div>

            {/* Title and Subtitle */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {product?.categoryNameBn}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                <span>{products.length.toLocaleString("bn-BD")}</span>
                <span>টি পণ্যের আজকের দাম ও পরিবর্তন</span>
              </p>
            </div>
          </div>
        </div>
        
         <FilteredProducts products={products}></FilteredProducts>
        </div>
      </div>

  );
};

export default CategoryPage;
