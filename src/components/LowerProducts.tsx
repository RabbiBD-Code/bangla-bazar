import { RicePrice } from '@/type/type';
import Link from 'next/link';
import React from 'react';

const LowerProducts = ({highP}:{highP:RicePrice}) => {
    return (
    <Link href={`/products/${highP.id}`}>
    <div className="w-full rounded-2xl bg-[#F9FAF8] p-5 shadow-sm border border-gray-200 flex flex-col justify-between font-sans text-gray-800 hover:border-2 hover:border-green-500">
      {/* Top Header Section */}
      <div className="flex items-center gap-3">
        {/* Item Icon Box */}
        <div className="w-14 h-14 bg-[#EEF4ED] rounded-2xl flex items-center justify-center shrink-0">
          <span className="text-2xl" role="img" aria-label="onion">
            {highP.image}
          </span>
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {highP.nameBn}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {highP.unit}
          </p>
        </div>
      </div>

      {/* Bottom Price & Percentage Section */}
      <div className="mt-6 flex items-end justify-between">
        {/* Price Info */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium mb-1">
            আজকের দাম
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-gray-900">{highP.today.toLocaleString("bn-BD")??0}</span>
            <span className="text-lg font-bold text-gray-900">টাকা</span>
          </div>
        </div>

        {/* Percentage Badge */}
        <div className="flex items-center gap-1 bg-[#EEF6EF] px-3 py-1.5 rounded-full">
          <span className="text-[#682cf3] text-xs font-bold leading-none">▼</span>
          <span className="text-[#682cf3] text-xs font-bold leading-none">
            {Math.abs(highP.change.pct).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
    </div>
    </Link>
    );
};

export default LowerProducts;