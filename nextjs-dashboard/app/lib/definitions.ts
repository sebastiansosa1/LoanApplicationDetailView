/** ---------------------------------------------------------------
*                       Type Definitions
----------------------------------------------------------------- */


export type CreditScoreLevel = 'good' | 'warning' | 'low';


export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};


export type Applicant = {
  id: string;
  name: string;
  annual_income: number;
  employment_status: string;
  credit_score: number;
  email: string;
};


export type Loan = {
  id: string;
  applicant_id: string;
  amount: number;
  purpose: string;
  date: string;
  status: LoanStatus;
};


export type DashboardRow = {
  loan_id: string;
  name: string;
  annual_income: number;
  employment_status: string;
  credit_score: number;
  amount: number;
  purpose: string;
  date: string;
  status: LoanStatus;
};


/** ---------------------------------------------------------------
*                       Enum Definitions
----------------------------------------------------------------- */


export enum LoanStatus {
  Pending = 'pending',
  UnderReview = 'under_review',
  Approved = 'approved',
  Rejected = 'rejected',
}


/** ---------------------------------------------------------------
*                       Other Definitions
----------------------------------------------------------------- */

// Loan Status State Machine
// Could potentially be on it's own file depending on requirements
// such as, is this meant to be defined in Server/SaaS, or hard-coded
// on client's side?

const allowedTransitions: Record<LoanStatus, LoanStatus[]> = {
  [LoanStatus.Pending]: [LoanStatus.UnderReview],
  [LoanStatus.UnderReview]: [LoanStatus.Approved, LoanStatus.Rejected],
  [LoanStatus.Approved]: [],
  [LoanStatus.Rejected]: [],
};


export function canTransition(
  current: LoanStatus,
  next: LoanStatus
): boolean {
  return allowedTransitions[current].includes(next);
}


export function nextAllowedStatus(
  current: LoanStatus
): LoanStatus[] {
  return allowedTransitions[current];
}