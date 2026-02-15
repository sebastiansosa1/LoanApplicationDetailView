// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChartSkeleton /> */}
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}


export function TableRowSkeleton() {
  return (
    <tr className="group">
      {/* Name */}
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
        <div className="h-5 w-32 rounded bg-gray-100" />
      </td>

      {/* Annual Income */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-5 w-24 rounded bg-gray-100" />
      </td>

      {/* Employment Status */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-5 w-28 rounded bg-gray-100" />
      </td>

      {/* Credit Score */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-16 rounded-full bg-gray-100" />
      </td>

      {/* Amount */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-5 w-20 rounded bg-gray-100" />
      </td>

      {/* Purpose */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-5 w-24 rounded bg-gray-100" />
      </td>

      {/* Application Date */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-5 w-24 rounded bg-gray-100" />
      </td>

      {/* Status */}
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-8 w-full rounded-full bg-gray-100" />
      </td>
    </tr>
  );
}


export function LoansTableSkeleton() {
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
                      <b>Skeleton</b>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}
