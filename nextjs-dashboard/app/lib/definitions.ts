
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

export type LoanStatus = 'pending' | 'under_review' | 'approved' | 'rejected';

export type Loan = {
  id: number;
  applicant_id: string;
  amount: number;
  purpose: string;
  date: string;
  status: LoanStatus;
};

export type DashboardRow = {
  name: string;
  annual_income: number;
  employment_status: string;
  credit_score: number;
  amount: number;
  purpose: string;
  date: string;
  status: Loan['status'];
};
