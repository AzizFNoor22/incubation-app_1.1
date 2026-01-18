import { TrendingUp, Users, Briefcase, Award, Download, Calendar, BarChart3, PieChart } from 'lucide-react';
import { Badge } from './ui/badge';

interface ImpactMetric {
  category: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface Report {
  id: string;
  title: string;
  period: string;
  type: string;
  generatedDate: string;
  status: 'Published' | 'Draft';
}

export function ImpactReports() {
  const impactMetrics: ImpactMetric[] = [
    { category: 'Total Revenue Growth', value: '+23%', change: '+5% vs last quarter', trend: 'up' },
    { category: 'Jobs Created', value: '127', change: '+18 new positions', trend: 'up' },
    { category: 'Business Formalization', value: '68%', change: '+12% improvement', trend: 'up' },
    { category: 'Digital Adoption', value: '85%', change: '+25% vs baseline', trend: 'up' },
  ];

  const reports: Report[] = [
    { id: 'RPT-001', title: 'Q1 2026 Impact Report', period: 'Jan - Mar 2026', type: 'Quarterly', generatedDate: '2026-03-28', status: 'Published' },
    { id: 'RPT-002', title: 'Monthly Progress Report - March', period: 'March 2026', type: 'Monthly', generatedDate: '2026-03-31', status: 'Published' },
    { id: 'RPT-003', title: 'Financing Impact Assessment', period: 'Jan - Mar 2026', type: 'Special', generatedDate: '2026-03-25', status: 'Published' },
    { id: 'RPT-004', title: 'Participant Success Stories', period: 'Q1 2026', type: 'Case Study', generatedDate: '2026-03-20', status: 'Published' },
    { id: 'RPT-005', title: 'Monthly Progress Report - April', period: 'April 2026', type: 'Monthly', generatedDate: '2026-04-01', status: 'Draft' },
  ];

  const successStories = [
    {
      name: 'Siti Nurhaliza',
      business: 'Boutique Hijab Premium',
      achievement: 'Increased revenue by 35% and opened 2 new branches',
      image: 'SN',
    },
    {
      name: 'Maya Putri',
      business: 'Catering Sehat & Organik',
      achievement: 'Achieved halal certification and secured major corporate contracts',
      image: 'MP',
    },
    {
      name: 'Ahmad Rizki',
      business: 'Warung Nasi Barokah',
      achievement: 'Digitalized operations and increased daily customers by 50%',
      image: 'AR',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Key Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Revenue Growth</div>
              <div className="text-3xl font-semibold text-gray-900">+23%</div>
              <div className="text-xs text-green-600 font-medium mt-1">+5% vs last quarter</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Jobs Created</div>
              <div className="text-3xl font-semibold text-gray-900">127</div>
              <div className="text-xs text-green-600 font-medium mt-1">+18 new positions</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Formalization</div>
              <div className="text-3xl font-semibold text-gray-900">68%</div>
              <div className="text-xs text-green-600 font-medium mt-1">+12% improvement</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Briefcase className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Digital Adoption</div>
              <div className="text-3xl font-semibold text-gray-900">85%</div>
              <div className="text-xs text-green-600 font-medium mt-1">+25% vs baseline</div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Award className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Economic Impact</h2>
            <BarChart3 className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Total Revenue Generated</span>
                <span className="font-semibold text-gray-900">Rp 12.5 Miliar</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Average Revenue per Business</span>
                <span className="font-semibold text-gray-900">Rp 125 Juta</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '70%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Financing Disbursed</span>
                <span className="font-semibold text-gray-900">Rp 2.1 Miliar</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Investment Ready Businesses</span>
                <span className="font-semibold text-gray-900">18 UMKM</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Social Impact</h2>
            <PieChart className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Full-time Jobs Created</span>
                <span className="font-semibold text-gray-900">127 positions</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Part-time Jobs Created</span>
                <span className="font-semibold text-gray-900">78 positions</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Women Entrepreneurs</span>
                <span className="font-semibold text-gray-900">48%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '48%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Youth Entrepreneurs (&lt;35)</span>
                <span className="font-semibold text-gray-900">62%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '62%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {successStories.map((story, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-[#4a9b9b] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {story.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-600">{story.business}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">{story.achievement}</p>
              <button className="mt-4 text-sm text-[#4a9b9b] hover:text-[#3d8282] font-medium">
                Read Full Story →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Impact by Category */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Environmental Impact</div>
          <div className="text-3xl font-semibold mb-2">32 UMKM</div>
          <p className="text-sm opacity-90">Adopted sustainable practices and eco-friendly operations</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Technology Adoption</div>
          <div className="text-3xl font-semibold mb-2">85%</div>
          <p className="text-sm opacity-90">Using digital tools for operations and marketing</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Halal Certification</div>
          <div className="text-3xl font-semibold mb-2">45 UMKM</div>
          <p className="text-sm opacity-90">Achieved halal certification for products</p>
        </div>
      </div>

      {/* Reports Library */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Reports Library</h2>
          <button className="px-4 py-2 bg-[#4a9b9b] text-white rounded hover:bg-[#3d8282] transition-colors text-sm">
            Generate New Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Report ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Period</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Generated</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{report.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gray-400" />
                      {report.period}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(report.generatedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={report.status === 'Published' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-100'}>
                      {report.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="flex items-center gap-1 text-[#4a9b9b] hover:text-[#3d8282] font-medium">
                      <Download size={14} />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-gradient-to-r from-[#4a9b9b] to-[#3d8282] rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Program Impact Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-sm opacity-90 mb-1">Total Participants</div>
            <div className="text-2xl font-semibold">100 UMKM</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Program Duration</div>
            <div className="text-2xl font-semibold">24 Weeks</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Success Rate</div>
            <div className="text-2xl font-semibold">80%</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Total Investment</div>
            <div className="text-2xl font-semibold">Rp 5.2 M</div>
          </div>
        </div>
      </div>
    </div>
  );
}
