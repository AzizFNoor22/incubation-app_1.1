interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  status?: string;
  statusColor?: 'green' | 'blue' | 'orange';
}

export function KPICard({ title, value, subtitle, status, statusColor = 'green' }: KPICardProps) {
  const statusColors = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    orange: 'text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div className="text-3xl font-semibold text-gray-900 mb-1">{value}</div>
      {subtitle && <div className="text-xs text-gray-500 mb-2">{subtitle}</div>}
      {status && (
        <div className={`text-xs ${statusColors[statusColor]} font-medium`}>
          {status}
        </div>
      )}
    </div>
  );
}
