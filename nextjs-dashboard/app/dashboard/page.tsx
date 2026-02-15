import { DashboardSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {
    return (
    <Suspense key={''} fallback={<DashboardSkeleton />}>
        <DashboardSkeleton /> {/*Demo only*/}
    </Suspense>
);
}