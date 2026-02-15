'use client';

import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { LoanStatus } from '@/app/lib/definitions';


export function statusStyle(status: LoanStatus) {
  switch (status) {
    case LoanStatus.Pending:
      return 'bg-gray-100 text-gray-600';
    case LoanStatus.UnderReview:
      return 'bg-yellow-100 text-yellow-700';
    case LoanStatus.Approved:
      return 'bg-green-500 text-white';
    case LoanStatus.Rejected:
      return 'bg-red-500 text-white';
  }
}


export function statusName(status: LoanStatus) {
    {/* <ClockIcon className="ml-1 w-4 text-gray-500" /> */}
    {/* <CheckIcon className="ml-1 w-4 text-white" /> */}
      switch (status) {
      case LoanStatus.Pending:
        return 'Pending';
      case LoanStatus.UnderReview:
        return 'Under Review';
      case LoanStatus.Approved:
        return 'Approved';
      case LoanStatus.Rejected:
        return 'Rejected';
    }
}