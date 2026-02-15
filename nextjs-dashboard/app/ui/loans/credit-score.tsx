'use client';

import { CreditScoreLevel } from '@/app/lib/definitions';


export function creditScoreLevel(score: number): CreditScoreLevel {
  if (score >= 500) return 'good';
  if (score >= 200) return 'warning';
  return 'low';
}

export function creditScoreStyle(level: CreditScoreLevel): string {
  switch (level) {
    case 'good':
      return 'bg-green-100 text-green-700 ring-green-600/20';

    case 'warning':
      return 'bg-yellow-100 text-yellow-700 ring-yellow-600/20';

    case 'low':
      return 'bg-red-100 text-red-700 ring-red-600/20';
  }
}
