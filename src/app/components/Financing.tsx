import { DollarSign, TrendingUp, Users, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Badge } from './ui/badge';

interface LoanApplication {
  id: string;
  businessName: string;
  ownerName: string;
  amount: string;
  purpose: string;
  status: 'Approved' | 'Pending' | 'Rejected' | 'Disbursed';
  submittedDate: string;
  interestRate: string;
  term: string;
}

interface FinancingStats {
  totalDisbursed: string;
  totalApplications: number;
  approvalRate: number;
  activeLoans: number;
  npfRate: number;
}

export function Financing() {
  const stats: FinancingStats = {
    totalDisbursed: 'Rp 2.1 M',
    totalApplications: 68,
    approvalRate: 62,
    activeLoans: 42,
    npfRate: 0,
  };

  const applications: LoanApplication[] = [
    { id: 'FIN-001', businessName: 'Warung Nasi Barokah', ownerName: 'Ahmad Rizki', amount: 'Rp 50,000,000', purpose: 'Business Expansion', status: 'Disbursed', submittedDate: '2026-01-15', interestRate: '8%', term: '12 months' },
    { id: 'FIN-002', businessName: 'Boutique Hijab Premium', ownerName: 'Siti Nurhaliza', amount: 'Rp 75,000,000', purpose: 'Inventory Purchase', status: 'Disbursed', submittedDate: '2026-01-18', interestRate: '8%', term: '18 months' },
    { id: 'FIN-003', businessName: 'Digital Print & Sablon', ownerName: 'Budi Santoso', amount: 'Rp 30,000,000', purpose: 'Equipment Purchase', status: 'Approved', submittedDate: '2026-02-01', interestRate: '8%', term: '12 months' },
    { id: 'FIN-004', businessName: 'Kue Tradisional Authentic', ownerName: 'Dewi Lestari', amount: 'Rp 25,000,000', purpose: 'Working Capital', status: 'Pending', submittedDate: '2026-02-10', interestRate: '8%', term: '12 months' },
    { id: 'FIN-005', businessName: 'Laundry Express', ownerName: 'Rudi Hermawan', amount: 'Rp 40,000,000', purpose: 'Branch Opening', status: 'Approved', submittedDate: '2026-02-12', interestRate: '8%', term: '12 months' },
    { id: 'FIN-006', businessName: 'Catering Sehat & Organik', ownerName: 'Maya Putri', amount: 'Rp 60,000,000', purpose: 'Kitchen Equipment', status: 'Disbursed', submittedDate: '2026-01-20', interestRate: '8%', term: '18 months' },
    { id: 'FIN-007', businessName: 'Workshop Motor', ownerName: 'Eko Prasetyo', amount: 'Rp 20,000,000', purpose: 'Tool Purchase', status: 'Rejected', submittedDate: '2026-02-08', interestRate: '-', term: '-' },
    { id: 'FIN-008', businessName: 'Salon & Beauty Care', ownerName: 'Fitri Handayani', amount: 'Rp 35,000,000', purpose: 'Renovation', status: 'Pending', submittedDate: '2026-02-15', interestRate: '8%', term: '12 months' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disbursed':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'Approved':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'Pending':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-100';
      case 'Rejected':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Disbursed':
        return <CheckCircle size={16} className="text-green-600" />;
      case 'Approved':
        return <CheckCircle size={16} className="text-blue-600" />;
      case 'Pending':
        return <Clock size={16} className="text-orange-600" />;
      case 'Rejected':
        return <XCircle size={16} className="text-red-600" />;
      default:
        return null;
    }
  };

  const disbursedCount = applications.filter(a => a.status === 'Disbursed').length;
  const approvedCount = applications.filter(a => a.status === 'Approved').length;
  const pendingCount = applications.filter(a => a.status === 'Pending').length;
  const rejectedCount = applications.filter(a => a.status === 'Rejected').length;

  return (
    <div className="p-8 space-y-6">
      {/* Financing Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Disbursed</div>
              <div className="text-2xl font-semibold text-gray-900">{stats.totalDisbursed}</div>
              <div className="text-xs text-gray-500 mt-1">{stats.activeLoans} active loans</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Applications</div>
              <div className="text-2xl font-semibold text-gray-900">{stats.totalApplications}</div>
              <div className="text-xs text-gray-500 mt-1">Total submitted</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Approval Rate</div>
              <div className="text-2xl font-semibold text-gray-900">{stats.approvalRate}%</div>
              <div className="text-xs text-green-600 font-medium mt-1">Above target</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">NPF Rate</div>
              <div className="text-2xl font-semibold text-green-600">{stats.npfRate}%</div>
              <div className="text-xs text-gray-500 mt-1">Non-performing</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Pending Review</div>
              <div className="text-2xl font-semibold text-orange-600">{pendingCount}</div>
              <div className="text-xs text-gray-500 mt-1">Needs action</div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertCircle className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Application Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Disbursed</div>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <div className="text-3xl font-semibold text-gray-900">{disbursedCount}</div>
          <div className="text-xs text-gray-500 mt-1">Funds transferred</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Approved</div>
            <CheckCircle className="text-blue-600" size={20} />
          </div>
          <div className="text-3xl font-semibold text-gray-900">{approvedCount}</div>
          <div className="text-xs text-gray-500 mt-1">Awaiting disbursement</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Pending</div>
            <Clock className="text-orange-600" size={20} />
          </div>
          <div className="text-3xl font-semibold text-gray-900">{pendingCount}</div>
          <div className="text-xs text-gray-500 mt-1">Under review</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Rejected</div>
            <XCircle className="text-red-600" size={20} />
          </div>
          <div className="text-3xl font-semibold text-gray-900">{rejectedCount}</div>
          <div className="text-xs text-gray-500 mt-1">Not approved</div>
        </div>
      </div>

      {/* Financing Programs */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Available Financing Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <DollarSign className="text-teal-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Micro Business Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Up to Rp 50 million for working capital and business expansion</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Interest rate: 8% per annum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Tenure: 6-12 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Collateral: Light requirements</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm font-medium">
              Apply Now
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <DollarSign className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SME Growth Loan</h3>
            <p className="text-sm text-gray-600 mb-4">Up to Rp 100 million for established businesses with growth potential</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Interest rate: 9% per annum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Tenure: 12-24 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Collateral: Required</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium">
              Apply Now
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <DollarSign className="text-purple-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Equipment Financing</h3>
            <p className="text-sm text-gray-600 mb-4">Special financing for business equipment and machinery purchase</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-0.5">•</span>
                <span>Interest rate: 7.5% per annum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-0.5">•</span>
                <span>Tenure: 12-36 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-0.5">•</span>
                <span>Collateral: Equipment itself</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Loan Applications Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Loan Applications</h2>
          <button className="px-4 py-2 bg-[#4a9b9b] text-white rounded hover:bg-[#3d8282] transition-colors text-sm">
            New Application
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Application ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Business</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Interest</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Term</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {application.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{application.businessName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{application.ownerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {application.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{application.purpose}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={`flex items-center gap-1 w-fit ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      {application.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.interestRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {application.term}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(application.submittedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• All loan applications are reviewed within 5-7 business days</li>
              <li>• Interest rates are competitive and based on Bank Indonesia reference rate</li>
              <li>• NPF rate maintained at 0% through careful screening and mentoring support</li>
              <li>• Special financing terms available for participants with excellent program performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
