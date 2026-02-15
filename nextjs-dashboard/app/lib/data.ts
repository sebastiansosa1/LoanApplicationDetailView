'use server';

import { applicants, loans } from './mock-db'
import { Applicant, 
    Loan, 
    DashboardRow, 
    LoanStatus, 
    canTransition
 } from './definitions';



const ITEMS_PER_PAGE = 8;   // For Loan's table pagination
const DB_DELAY = 300;       // For default async DB latency simulation in ms


/** --------- Utility to simulate async DB latency ------------- */
function simulateDelay<T>(data: T, delay = DB_DELAY): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), delay)
  );
}


/** ---------------------------------------------------------------
*                     Applicant "queries"
----------------------------------------------------------------- */

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


/** ---------------------------------------------------------------
*                       Loan "queries"
----------------------------------------------------------------- */

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
    loan_id: string,
    next_status: LoanStatus
  ): Promise<void> {

  //Logs to 
  console.log (`Updating loan ${loan_id} status to ${next_status}`);
  const loan = loans.find((l) => l.id === loan_id);
  if (!loan) throw new Error('Loan not found');

  if (!canTransition(loan.status, next_status)) {
    throw new Error(
      `Invalid transition from ${loan.status} to ${next_status}`
    );
  }

  loan.status = next_status;

  return simulateDelay(undefined);
}


export async function getLoansPages(): Promise<number> {
  const subtotal = (await getLoans()).length;
  const result = subtotal/ITEMS_PER_PAGE;
  return Math.ceil(result);
}


export async function getDashboardData(
  // query: string, //it would be used in a real DB to order, filter, or search
  currentPage: number,
): Promise<DashboardRow[]> {

  // Defensive guard to normalise input
  const safeCurrentPage:number = Math.max(currentPage, 1) || 1;
  const allRows: DashboardRow[] = loans.map((loan) => {
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
      loan_id: loan.id,
      amount: loan.amount,
      purpose: loan.purpose,
      date: loan.date,
      status: loan.status,
    };
  });

  const totalCount = allRows.length; //count should be retrieved directly from DB
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const from = Math.max((safeCurrentPage - 1) * ITEMS_PER_PAGE, 0); //in case of negatives
  const to = Math.min(from + ITEMS_PER_PAGE, totalCount);
  //Result:
  const paginatedRows = allRows.slice(from, to);
  return simulateDelay(paginatedRows);
}

