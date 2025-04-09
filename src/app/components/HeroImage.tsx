'use client';

import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#f5f3ff] p-4 rounded-t-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#1e1b4b]">OikosPay</h2>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-[#c7d2fe] rounded-full flex items-center justify-center">
                <span className="text-[#4338ca] text-xs">?</span>
              </div>
              <div className="w-6 h-6 bg-[#c7d2fe] rounded-full flex items-center justify-center">
                <span className="text-[#4338ca] text-xs">👤</span>
              </div>
              <div className="w-6 h-6 bg-[#6366F1] rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#1e1b4b]">Good morning, Admin!</h1>
          </div>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Bank balance</div>
              <div className="text-xl font-bold">€8,520</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Total tenants</div>
              <div className="text-xl font-bold">6</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Unpaid charges</div>
              <div className="text-xl font-bold">€2,190</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-lg font-bold mb-1">Tenants paid</div>
              <div className="flex items-end">
                <div className="text-4xl font-bold text-[#1e1b4b]">12</div>
                <div className="text-sm text-gray-500 ml-2 mb-1">out of 18</div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <div className="text-lg font-bold">Expenses</div>
                <div className="text-xs text-gray-500">PAST 6 MONTHS</div>
              </div>
              <div className="h-16 w-full bg-[#f5f3ff] rounded-md relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-8 overflow-hidden">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M0,10 Q10,5 20,10 T40,10 T60,15 T80,5 T100,10" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                      <path d="M0,15 Q10,12 20,15 T40,15 T60,18 T80,12 T100,15" fill="none" stroke="#c7d2fe" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="text-lg font-bold mb-2">Building feed</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-3">What's on your mind?</div>
              <div className="border-t pt-3">
                <div className="flex mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                  <div>
                    <div className="text-sm font-semibold">Markos</div>
                    <div className="text-xs text-gray-500">Water bill, charges seem higher than usual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
