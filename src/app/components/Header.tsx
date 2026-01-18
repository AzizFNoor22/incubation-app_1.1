interface HeaderProps {
  userName?: string;
  userRole?: string;
  title?: string;
}

export function Header({ userName = "Coach Adewin", userRole = "Program Manager", title = "Entrepreneurship Incubation Dashboard" }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-0.5">Batch 01 • 100 UMKM • Periode Jan-Mar 2026</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm text-[#4a9b9b] border border-[#4a9b9b] rounded hover:bg-[#4a9b9b]/5 transition-colors">
          CELESTIALPRENEUR COHORT
        </button>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">{userName}</div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
          <div className="w-10 h-10 bg-[#4a9b9b] rounded-full flex items-center justify-center text-white font-semibold">
            AM
          </div>
        </div>
      </div>
    </div>
  );
}