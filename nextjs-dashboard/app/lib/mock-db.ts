import { Applicant, Loan, DashboardRow, LoanStatus } from './definitions';


/**
 * In-memory "tables"
 * These reset on refresh.
 */

export const applicants: Applicant[] = 
[
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    annual_income: 89000,
    employment_status: 'full_time',
    credit_score: 720,
    email: 'evil@rabbit.com'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    annual_income: 95000,
    employment_status: 'part_time',
    credit_score: 501,
    email: 'delba@oliveira.com'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    annual_income: 105000,
    employment_status: 'contractor',
    credit_score: 320,
    email: 'lee@robinson.com'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    annual_income: 73500,
    employment_status: 'full_time',
    credit_score: 850,
    email: 'michael@novotny.com'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    annual_income: 150000,
    employment_status: 'full_time',
    credit_score: 115,
    email: 'amy@burns.com'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    annual_income: 89000,
    employment_status: 'unemployed',
    credit_score: 937,
    email: 'balazs@orban.com'
  },
];

export const loans: Loan[] = 
[
  {
    id: '703',
    applicant_id: applicants[0].id,
    amount: 15795,
    purpose: 'car',
    status: LoanStatus.Pending,
    date: '2022-12-06',
  },
  {
    id: '805',
    applicant_id: applicants[1].id,
    amount: 20348,
    purpose: 'car',
    status: LoanStatus.Pending,
    date: '2022-11-14',
  },
  {
    id: '1309',
    applicant_id: applicants[4].id,
    amount: 3040,
    purpose: 'car repairs',
    status: LoanStatus.Pending,
    date: '2022-10-29',
  },
  {
    id: '418',
    applicant_id: applicants[3].id,
    amount: 44800,
    purpose: 'car',
    status: LoanStatus.Pending,
    date: '2023-09-10',
  },
  {
    id: '515',
    applicant_id: applicants[5].id,
    amount: 34577,
    purpose: 'car',
    status: LoanStatus.Pending,
    date: '2023-08-05',
  },
  {
    id: '692',
    applicant_id: applicants[2].id,
    amount: 54246,
    purpose: 'house repairs',
    status: LoanStatus.Pending,
    date: '2023-07-16',
  },
  {
    id: '1717',
    applicant_id: applicants[0].id,
    amount: 666,
    purpose: 'lawn mower',
    status: LoanStatus.Approved,
    date: '2023-06-27',
  },
  {
    id: '1001',
    applicant_id: applicants[3].id,
    amount: 32545,
    purpose: 'UTE',
    status: LoanStatus.Pending,
    date: '2023-06-09',
  },
  {
    id: '431',
    applicant_id: applicants[4].id,
    amount: 1250,
    purpose: 'bike',
    status: LoanStatus.Approved,
    date: '2023-06-17',
  },
  {
    id: '894',
    applicant_id: applicants[5].id,
    amount: 8546,
    purpose: 'car',
    status: LoanStatus.Pending,
    date: '2023-06-07',
  },
  {
    id: '1003',
    applicant_id: applicants[1].id,
    amount: 500,
    purpose: 'house fixes',
    status: LoanStatus.Pending,
    date: '2023-08-19',
  },
  {
    id: '1202',
    applicant_id: applicants[5].id,
    amount: 8945,
    purpose: 'boat',
    status: LoanStatus.Pending,
    date: '2023-06-03',
  },
  {
    id: '88',
    applicant_id: applicants[2].id,
    amount: 1000,
    purpose: 'bike',
    status: LoanStatus.Rejected,
    date: '2022-06-05',
  },
];