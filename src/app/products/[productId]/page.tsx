export interface RicePrice {
  id: number;
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: Market[];
  nameBn: string;
  slug: string;
  today: number;
  unit: string;
  yesterday: number;
}
interface RiceDetailsProps {
  params: Promise<{
    productId: string;
  }>;
}
export interface Market {
  division: string;
  market: string;
  max: number;
  min: number;
}
const PageDetails = async({params}: RiceDetailsProps) => {
    const {productId} = await params

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);
    const productData = await res.json();
    const data:RicePrice = productData
    console.log(data);

    const minValue = data.markets?.length > 0 ? Math.min(...data.markets.map(item => item.min)) : 0;
    const maxValue = data.markets?.length > 0 ? Math.max(...data.markets.map(item => item.max)) : 0;

    const average = Math.abs(maxValue + minValue)/2;

    return (
        <div>
            <div className=" bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:px-6">

        {/* ========== Header Card ========== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            
            {/* Left side */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl shadow-inner">
                {data.image}
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {data.nameBn}
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  প্রতি {data.unit === "kg" ? "কেজি" : data.unit === "litre" ? "লিটার" : data.unit} • {data.categoryNameBn}
                </p>
                <p className="text-xs text-gray-400 mt-1.5">
                  গতকালের তুলনায় আজকের দাম{" "}
                  <span className="font-bold text-gray-800">{data.today < data.yesterday ? "কমেছে" : "বেড়েছে"}</span> {" "}
                  {Math.abs(data.today - data.yesterday)} টাকা
                </p>
              </div>
            </div>

            {/* Right side - Current Price */}
            <div
              className={`rounded-xl px-5 py-3.5 text-right border flex flex-col justify-center items-center ${
                data.today
                  ? "bg-emerald-50 border-emerald-100"
                  : "bg-rose-50 border-rose-100"
              }`}
            >
              <p className="text-xl font-medium text-gray-600">আজকের দাম</p>
              <div className="flex items-center  gap-1 mt-1">
                <span
                  className={`text-3xl font-bold ${
                    data.today ? "text-emerald-700" : "text-rose-700"
                  }`}
                >
                  {data.today?.toLocaleString('bn-BD')??0}
                </span>
                <span className="text-sm text-gray-600">টাকা / কেজি</span>
              </div>
              <div
                className={`flex items-center justify-end gap-1 mt-1 text-sm font-medium ${
                  data.change?.dir ==="down" ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                <span className={`${data.change?.dir === "down"? "text-green-600":" text-red-600"}`}>{data.change?.dir === "down" ? "▼" : "▲"}</span>
                <span>{Math.abs(data.change?.pct).toLocaleString('bn-BD')??0}%</span>
              </div>
            </div>
          </div>
        </div>

        

        

        {/* ========== Market Table ========== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
{/* ========== Price Summary ========== */}
              <div  className="mb-6 p-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Lowest */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">সর্বনিম্ন দাম</p>
              <p className="text-2xl font-bold text-emerald-600">
                {minValue.toLocaleString('bn-BD')??0}{" "}
                <span className="text-sm font-medium text-gray-600">টাকা</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">সবচেয়ে কম দামের বাজার</p>
            </div>

            {/* Highest */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">সর্বোচ্চ দাম</p>
              <p className="text-2xl font-bold text-rose-600">
                {maxValue.toLocaleString('bn-BD')??0}{" "}
                <span className="text-sm font-medium text-gray-600">টাকা</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">সবচেয়ে বেশি দামের বাজার</p>
            </div>

            {/* Average */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">গড় দাম</p>
              <p className="text-2xl font-bold text-teal-600">
                {average.toLocaleString('bn-BD')??0}{" "}
                <span className="text-sm font-medium text-gray-600">টাকা</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">প্রতি কেজি-এর হিসাবে</p>
            </div>
          </div>
                </div>
        


          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-800">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <span className="text-xs text-gray-400">
              {data.markets?.length} টি বাজার
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-left">
                  <th className="px-5 py-3 font-medium">বাজার</th>
                  <th className="px-5 py-3 font-medium">বিভাগ</th>
                  <th className="px-5 py-3 font-medium text-center">সর্বনিম্ন</th>
                  <th className="px-5 py-3 font-medium text-center">সর্বোচ্চ</th>
                  <th className="px-5 py-3 font-medium text-center">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(data.markets??[]).map((item, index) => {
                  const avg = Math.round((item.min + item.max) / 2).toLocaleString("bn-BD")??0;
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-5 py-3.5 font-medium text-gray-800">
                        {item.market}
                      </td>
                      <td className="px-5 py-3.5 text-gray-600">
                        {item.division}
                      </td>
                      <td className="px-5 py-3.5 text-center text-gray-700">
                        {item.min.toLocaleString("bn-BD")??0} টাকা
                      </td>
                      <td className="px-5 py-3.5 text-center text-gray-700">
                        {item.max.toLocaleString("bn-BD")??0} টাকা
                      </td>
                      <td className="px-5 py-3.5 text-center font-semibold text-teal-700">
                        {avg} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default PageDetails;