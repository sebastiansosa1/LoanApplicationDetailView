'use client';

import { useEffect, useState } from 'react';
import { getDashboardData } from '@/app/lib/mock-db';
import { DashboardRow } from '@/app/lib/definitions';
import Search from '@/app/ui/search';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';


export default function Table() {
  const [rows, setRows] = useState<DashboardRow[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getDashboardData();
    setRows(data);
  }

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Loan Applications
      </h1>
      <Search placeholder="Search, not implemented" />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">

                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Annual Income
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Employment Status
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Credit Score
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Purpose
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Application Date
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {rows?.map((row, index) => (
                    <tr key={index} className="group">
                      
                      {/* Name */}
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{row.name}</p>
                        </div>
                      </td>
                      {/* Annual Income */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.annual_income}
                      </td>

                      {/* Employment Status */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.employment_status}
                      </td>

                      {/* Credit Score -> TODO: Change background according to ranges */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <b>{row.credit_score}</b>
                      </td>

                      {/* Ammount */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        $ <b>{row.amount}</b>
                      </td>

                      {/* Purpose */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.purpose}
                      </td>

                      {/* Application Date */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.date}
                      </td>

                      {/* Status -> TODO: attach hook to state change and prompt confirmation when changing*/}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}