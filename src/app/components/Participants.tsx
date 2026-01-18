import { Search, Filter, Download, UserCheck, UserX, Users } from 'lucide-react';
import { Badge } from './ui/badge';

interface Participant {
  id: string;
  name: string;
  business: string;
  cluster: string;
  status: 'Active' | 'At-Risk' | 'Inactive';
  stage: number;
  completion: number;
  revenue: string;
  mentor: string;
}

export function Participants() {
  const participants: Participant[] = [
    { id: '001', name: 'Ahmad Rizki', business: 'Warung Nasi Barokah', cluster: 'Cluster 1', status: 'Active', stage: 2, completion: 78, revenue: '+28%', mentor: 'Coach Andi' },
    { id: '002', name: 'Siti Nurhaliza', business: 'Boutique Hijab Premium', cluster: 'Cluster 1', status: 'Active', stage: 2, completion: 85, revenue: '+35%', mentor: 'Coach Andi' },
    { id: '003', name: 'Budi Santoso', business: 'Digital Print & Sablon', cluster: 'Cluster 2', status: 'Active', stage: 2, completion: 62, revenue: '+18%', mentor: 'Coach Sari' },
    { id: '004', name: 'Dewi Lestari', business: 'Kue Tradisional Authentic', cluster: 'Cluster 2', status: 'At-Risk', stage: 1, completion: 45, revenue: '+8%', mentor: 'Coach Sari' },
    { id: '005', name: 'Rudi Hermawan', business: 'Laundry Express', cluster: 'Cluster 3', status: 'Active', stage: 2, completion: 72, revenue: '+22%', mentor: 'Coach Bima' },
    { id: '006', name: 'Maya Putri', business: 'Catering Sehat & Organik', cluster: 'Cluster 3', status: 'Active', stage: 3, completion: 88, revenue: '+42%', mentor: 'Coach Bima' },
    { id: '007', name: 'Eko Prasetyo', business: 'Workshop Motor & Accessories', cluster: 'Cluster 4', status: 'At-Risk', stage: 1, completion: 38, revenue: '+5%', mentor: 'Coach Diana' },
    { id: '008', name: 'Fitri Handayani', business: 'Salon & Beauty Care', cluster: 'Cluster 4', status: 'Active', stage: 2, completion: 81, revenue: '+31%', mentor: 'Coach Diana' },
    { id: '009', name: 'Hendra Wijaya', business: 'Toko Bangunan Modern', cluster: 'Cluster 5', status: 'Active', stage: 2, completion: 69, revenue: '+19%', mentor: 'Coach Eko' },
    { id: '010', name: 'Lina Marlina', business: 'Fashion Anak & Balita', cluster: 'Cluster 5', status: 'Active', stage: 2, completion: 75, revenue: '+26%', mentor: 'Coach Eko' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'At-Risk':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-100';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const activeCount = participants.filter(p => p.status === 'Active').length;
  const atRiskCount = participants.filter(p => p.status === 'At-Risk').length;

  return (
    <div className="p-8 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Participants</div>
              <div className="text-3xl font-semibold text-gray-900">{participants.length}</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Active</div>
              <div className="text-3xl font-semibold text-green-600">{activeCount}</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <UserCheck className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">At-Risk</div>
              <div className="text-3xl font-semibold text-orange-600">{atRiskCount}</div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <UserX className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Avg Completion</div>
              <div className="text-3xl font-semibold text-gray-900">
                {Math.round(participants.reduce((acc, p) => acc + p.completion, 0) / participants.length)}%
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="text-purple-600 font-semibold">%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, business, or cluster..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={18} />
              <span className="text-sm">Filters</span>
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#4a9b9b] text-white rounded-lg hover:bg-[#3d8282] transition-colors">
            <Download size={18} />
            <span className="text-sm">Export Data</span>
          </button>
        </div>
      </div>

      {/* Participants Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Participant</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Business Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cluster</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue Growth</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Mentor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {participants.map((participant) => (
                <tr key={participant.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {participant.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#4a9b9b] rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                        {participant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{participant.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{participant.business}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{participant.cluster}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getStatusColor(participant.status)}>
                      {participant.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Stage {participant.stage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#4a9b9b]"
                          style={{ width: `${participant.completion}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{participant.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {participant.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{participant.mentor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">1-10</span> of <span className="font-medium">{participants.length}</span> participants
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Previous</button>
          <button className="px-3 py-1 bg-[#4a9b9b] text-white rounded hover:bg-[#3d8282] text-sm">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
