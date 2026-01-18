export function Timeline() {
  const weeks = [
    { label: 'W0', position: 0 },
    { label: 'W4', position: 16.67 },
    { label: 'W8', position: 33.33 },
    { label: 'W12', position: 50 },
    { label: 'W16', position: 66.67 },
    { label: 'W20', position: 83.33 },
    { label: 'W24', position: 100 },
  ];

  const stages = [
    { name: 'Stage 1', color: 'bg-teal-500', start: 0, end: 33.33 },
    { name: 'Stage 2', color: 'bg-blue-600', start: 33.33, end: 66.67 },
    { name: 'Stage 3', color: 'bg-orange-400', start: 66.67, end: 100 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Program Timeline (Weeks 0-24)</h2>
      
      <div className="relative">
        {/* Week markers */}
        <div className="flex justify-between mb-2 text-xs text-gray-600">
          {weeks.map((week) => (
            <div key={week.label} className="flex flex-col items-center">
              <span>{week.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="relative h-8 rounded-full overflow-hidden flex">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`${stage.color} flex items-center justify-center text-white text-xs font-medium`}
              style={{ width: `${stage.end - stage.start}%` }}
            >
              {stage.name}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-3">
          Onboarding & assessment di minggu 0-1, final pitch dan rekomendasi pembinaan di minggu 20-24.
        </p>
      </div>
    </div>
  );
}
