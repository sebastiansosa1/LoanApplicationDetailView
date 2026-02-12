import { Applicant, Loan, DashboardRow } from './definitions.ts';

/**
 * In-memory "tables"
 * These reset on refresh.
 */

const applicants: Applicant[] = 
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
    credit_score: 850,
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
    credit_score: 230,
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

const loans: Loan[] = 
[
  {
    id: 703,
    applicant_id: applicants[0].id,
    amount: 15795,
    purpose: 'car',
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: 805,
    applicant_id: applicants[1].id,
    amount: 20348,
    purpose: 'car',
    status: 'pending',
    date: '2022-11-14',
  },
  {
    id: 1309,
    applicant_id: applicants[4].id,
    amount: 3040,
    purpose: 'car repairs',
    status: 'pending',
    date: '2022-10-29',
  },
  {
    id: 418,
    applicant_id: applicants[3].id,
    amount: 44800,
    purpose: 'car',
    status: 'pending',
    date: '2023-09-10',
  },
  {
    id: 515,
    applicant_id: applicants[5].id,
    amount: 34577,
    purpose: 'car',
    status: 'pending',
    date: '2023-08-05',
  },
  {
    id: 692,
    applicant_id: applicants[2].id,
    amount: 54246,
    purpose: 'house repairs',
    status: 'pending',
    date: '2023-07-16',
  },
  {
    id: 1717,
    applicant_id: applicants[0].id,
    amount: 666,
    purpose: 'lawn mower',
    status: 'under_review',
    date: '2023-06-27',
  },
  {
    id: 1001,
    applicant_id: applicants[3].id,
    amount: 32545,
    purpose: 'UTE',
    status: 'pending',
    date: '2023-06-09',
  },
  {
    id: 431,
    applicant_id: applicants[4].id,
    amount: 1250,
    purpose: 'bike',
    status: 'approved',
    date: '2023-06-17',
  },
  {
    id: 894,
    applicant_id: applicants[5].id,
    amount: 8546,
    purpose: 'car',
    status: 'pending',
    date: '2023-06-07',
  },
  {
    id: 1003,
    applicant_id: applicants[1].id,
    amount: 500,
    purpose: 'house fixes',
    status: 'pending',
    date: '2023-08-19',
  },
  {
    id: 1202,
    applicant_id: applicants[5].id,
    amount: 8945,
    purpose: 'boat',
    status: 'pending',
    date: '2023-06-03',
  },
  {
    id: 88,
    applicant_id: applicants[2].id,
    amount: 1000,
    purpose: 'bike',
    status: 'rejected',
    date: '2022-06-05',
  },
];

/**
 * Utility to simulate async DB latency
 */
function simulateDelay<T>(data: T, delay = 200): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), delay)
  );
}

/* ============================
   Applicant "queries"
============================ */

export async function getApplicants(): Promise<Applicant[]> {
  return simulateDelay([...applicants]);
}

export async function getApplicantById(id: string): Promise<Applicant | null> {
  const applicant = applicants.find((a) => a.id === id) ?? null;
  return simulateDelay(applicant);
}

export async function createApplicant(applicant: Applicant): Promise<void> {
  applicants.push(applicant);
  return simulateDelay(undefined);
}

/* ============================
   Loan "queries"
============================ */

export async function getLoans(): Promise<Loan[]> {
  return simulateDelay([...loans]);
}

export async function getLoansByApplicant(applicantId: string): Promise<Loan[]> {
  const result = loans.filter((l) => l.applicant_id === applicantId);
  return simulateDelay(result);
}

export async function createLoan(loan: Loan): Promise<void> {
  loans.push(loan);
  return simulateDelay(undefined);
}

export async function updateLoanStatus(
  loanId: string,
  status: Loan['status']
): Promise<void> {
  const loan = loans.find((l) => l.id === loanId);
  if (!loan) throw new Error('Loan not found');

  loan.status = status;
  return simulateDelay(undefined);
}

/* ============================
   Dashboard "queries"
============================ */

export async function getDashboardData(): Promise<DashboardRow[]> {
  const rows = loans.map((loan) => {
    const applicant = applicants.find(
      (a) => a.id === loan.applicant_id
    );

    if (!applicant) {
      throw new Error(
        `Applicant not found for loan ${loan.id}`
      );
    }

    return {
      name: applicant.name,
      annual_income: applicant.annual_income,
      employment_status: applicant.employment_status,
      credit_score: applicant.credit_score,
      amount: loan.amount,
      purpose: loan.purpose,
      date: loan.date,
      status: loan.status,
    };
  });

  return simulateDelay(rows);
}