'use client';

import { useEffect, useState } from 'react';
import { getDashboardData } from '@/app/lib/data';
import { DashboardRow } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import { LoanStatusDropdown } from './status-dropdown';
import { CreditScoreBadge } from './credit-score-badge';
import { formatCurrency } from '@/app/lib/utils';


export default function Table({ currentPage }: { currentPage: number }) {

  const [rows, setRows] = useState<DashboardRow[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getDashboardData(currentPage);
    setRows(data);
  }
  
  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">

                <thead className="text-center rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      <b>Name</b>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <b>Annual Income</b>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <b>Employment Status</b>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <b>Credit Score</b>
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      <b>Amount</b>
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      <b>Purpose</b>
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      <b>Application Date</b>
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      <b>Status</b>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-center divide-y divide-gray-200 text-gray-900">
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
                        {formatCurrency(row.annual_income)}
                      </td>
                      {/* Employment Status */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.employment_status}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <CreditScoreBadge score={row.credit_score} />
                      </td>
                      {/* Ammount */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {formatCurrency(row.amount)}
                      </td>
                      {/* Purpose */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.purpose}
                      </td>
                      {/* Application Date */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.date}
                      </td>
                      {/* Status */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <LoanStatusDropdown 
                          loan_id={row.loan_id} 
                          current_status={row.status} 
                          onStatusUpdated={load}
                        ></LoanStatusDropdown>
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