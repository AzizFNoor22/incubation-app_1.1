import { KPICard } from './KPICard';
import { StageCard } from './StageCard';
import { Timeline } from './Timeline';

export function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      {/* Program KPIs Section */}
      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Program KPIs (Real-time)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Total Participants"
            value="100"
            subtitle="80 aktif • 20 at-risk"
            status="+5 vs minggu lalu"
            statusColor="green"
          />
          <KPICard
            title="Avg Revenue Growth"
            value="+23%"
            subtitle="Target 30% dalam 6 bulan"
            status="Stabil meningkat"
            statusColor="green"
          />
          <KPICard
            title="Business Formalization"
            value="68%"
            subtitle="NPWP / NIB / Halal"
            status="On track"
            statusColor="green"
          />
          <KPICard
            title="Financing Access"
            value="42 UMKM"
            subtitle="Total Rp 2,1 Miliar"
            status="NPF 0%"
            statusColor="blue"
          />
        </div>
      </section>

      {/* Incubation Journey Section */}
      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Incubation Journey – 3 Stages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StageCard
            stageNumber={1}
            title="Incubation Basic"
            subtitle="Diagnostic • Mindset Shift • LMS • Business Plan"
            items={[
              'Entrepreneurship Diagnostic Completed (100/100)',
              'Mentoring Clusters Formed (10 clusters)',
              'Core LMS Modules Finished (Hbook, Buyer, Produk)',
              'Draft Business Plan v1 (80% complete)',
            ]}
            progress={78}
            progressLabel="Stage Completion"
            color="teal"
          />
          <StageCard
            stageNumber={2}
            title="Professional Performance"
            subtitle="AI Learning • Digital Marketing • Financials • Reports"
            items={[
              'AI-Powered Learning Enabled (100/100)',
              'Digital Marketing Plan Submitted (78/100)',
              'Simple Financial Projection Uploaded (85/100)',
              'Monthly Performance Reports (M2 of 3)',
            ]}
            progress={54}
            progressLabel="Stage Completion"
            color="blue"
          />
          <StageCard
            stageNumber={3}
            title="Optimized Corporate Management"
            subtitle="Tailed Invoice & Governance • IGT Dashboard"
            items={[
              'Corporate SOP & Org Structure',
              'Custom AI ED Workspace per Business',
              'Governance & API Dashboard',
              'Scale-up & Investment Readiness',
            ]}
            progress={18}
            progressLabel="Stage Completion"
            color="orange"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <Timeline />
      </section>
    </div>
  );
}
