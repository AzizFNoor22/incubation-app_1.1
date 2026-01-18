import { LayoutDashboard, Users, BookOpen, MessageCircle, DollarSign, FileText, Settings } from 'lucide-react';

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (itemId: string) => void;
  collapsed?: boolean;
}

export function Sidebar({ activeItem = 'Dashboard', onNavigate, collapsed = false }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'Dashboard' },
    { icon: Users, label: 'Participants', id: 'Participants' },
    { icon: BookOpen, label: 'Learning (LMS)', id: 'Learning' },
    { icon: MessageCircle, label: 'Mentoring', id: 'Mentoring' },
    { icon: DollarSign, label: 'Financing', id: 'Financing' },
    { icon: FileText, label: 'Impact Reports', id: 'Reports' },
    { icon: Settings, label: 'Settings', id: 'Settings' },
  ];

  return (
    <div className={`${collapsed ? 'w-[70px]' : 'w-[170px]'} bg-[#1e3a3a] text-white flex flex-col h-screen transition-all duration-300`}>
      <div className={`p-4 border-b border-[#2d4f4f] ${collapsed ? 'flex justify-center' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#4a9b9b] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold">EID</span>
          </div>
          {!collapsed && (
            <div>
              <div className="text-sm font-semibold">Awqaf Biz Incubator</div>
              <div className="text-xs text-gray-400">IPO Program</div>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 pt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                isActive 
                  ? 'bg-[#2d4f4f] text-white border-l-4 border-[#4a9b9b]' 
                  : 'text-gray-300 hover:bg-[#2d4f4f]/50'
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}