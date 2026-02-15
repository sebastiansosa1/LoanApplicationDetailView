'use client';

import { useState } from 'react';
import { LoanStatus, nextAllowedStatus } from '@/app/lib/definitions';
import { updateLoanStatus } from '@/app/lib/data';
import { statusStyle, statusName } from '@/app/ui/loans/status';



type Props = {
  loan_id: string;
  current_status: LoanStatus;
  onStatusUpdated?: () => void;
};


export function LoanStatusDropdown({
  loan_id,
  current_status,
  onStatusUpdated,
}: Props) {

  const [loading, setLoading] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<LoanStatus | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const nextStatus = nextAllowedStatus(current_status) || [];
  const isTerminal = nextStatus && nextStatus.length === 0;

  // Change Handler
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as LoanStatus;
    if (!next) return;

    setPendingStatus(next);
    setShowConfirm(true);
  }


  //COnfirm Change
  async function confirmChange() {
    if (!pendingStatus) return;

    setLoading(true);
    await updateLoanStatus(loan_id, pendingStatus);
    setLoading(false);

    setShowConfirm(false);
    setPendingStatus(null);

    onStatusUpdated?.();
  }

  function cancelChange() {
    setShowConfirm(false);
    setPendingStatus(null);
  }

  return (
    <div className="relative w-full">
      <select
        disabled={loading || isTerminal}
        value={current_status}
        onChange={handleChange}
        className={`
          w-full appearance-none cursor-pointer rounded-full
          px-4 py-2 pr-10 text-sm font-medium text-left
          focus:outline-none focus:ring-2
          ${statusStyle(current_status)}
          ${isTerminal ? 'cursor-default opacity-80' : ''}
        `}
      >
        {/* Current status */}
        <option value={current_status}>
          {statusName(current_status)}
        </option>

        {/* Only allowed transitions */}
        {nextStatus.map((status) => (
          <option key={status} value={status}>
            {statusName(status)}
          </option>
        ))}
      </select>

      {/* Confirmation pop-up */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              Confirm status change
            </h2>

            <p className="text-left text-sm text-gray-600 mb-4">
              Change status from{' '}
              <b>{statusName(current_status)}</b> to{' '}
              <b>{pendingStatus && statusName(pendingStatus)}</b>?
            </p>
            <p className="text-left text-sm text-gray-500 mb-4">
              <i>(This action cannot be reversed)</i>
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelChange}
                className="rounded-md px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={confirmChange}
                className="rounded-md px-4 py-2 text-sm bg-blue-400 text-white hover:bg-blue-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
