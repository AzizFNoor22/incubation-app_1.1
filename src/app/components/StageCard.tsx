import { Progress } from './ui/progress';

interface StageCardProps {
  stageNumber: number;
  title: string;
  subtitle: string;
  items: string[];
  progress: number;
  progressLabel: string;
  color: 'teal' | 'blue' | 'orange';
}

export function StageCard({ stageNumber, title, subtitle, items, progress, progressLabel, color }: StageCardProps) {
  const colorClasses = {
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      progress: 'bg-teal-500',
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      progress: 'bg-blue-500',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      progress: 'bg-orange-500',
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded mb-3`}>
        STAGE {stageNumber}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
      
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-500 mt-0.5">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Stage Completion</span>
          <span className="font-semibold text-gray-900">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.progress} transition-all`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
