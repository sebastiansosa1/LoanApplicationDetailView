'use server';
 
import { z } from 'zod';
import { updateLoanStatus } from '@/app/lib/data';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'under_review', 'approved', 'rejected']),
  date: z.string(),
});
 
const CreateLoan = FormSchema.omit({ id: true, date: true });
 
export async function editLoan(formData: FormData) {
    const { customerId, amount, status } = CreateLoan.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    // await updateLoanStatus(loanId, status);
}