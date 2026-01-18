import { useState } from 'react';
import { User, Bell, Lock, Globe, Database, Mail, Shield, Palette, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { useSettings } from '../context/SettingsContext';

export function Settings() {
  const { 
    profile, 
    updateProfile, 
    notifications, 
    updateNotifications,
    program,
    updateProgram,
    privacy,
    updatePrivacy,
    appearance,
    updateAppearance,
    region,
    updateRegion,
  } = useSettings();

  const [profileForm, setProfileForm] = useState(profile);
  const [programForm, setProgramForm] = useState(program);
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleProfileSave = () => {
    updateProfile(profileForm);
    showSuccess();
  };

  const handleProgramSave = () => {
    updateProgram(programForm);
    showSuccess();
  };

  const handlePasswordChange = () => {
    if (passwordForm.new !== passwordForm.confirm) {
      alert('New passwords do not match!');
      return;
    }
    if (passwordForm.new.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    // Simulate password change
    setPasswordForm({ current: '', new: '', confirm: '' });
    showSuccess();
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div className="p-8 space-y-6">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-50">
          <CheckCircle size={20} />
          <span>Settings saved successfully!</span>
        </div>
      )}

      {/* Profile Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#4a9b9b] rounded-full flex items-center justify-center">
            <User className="text-white" size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Profile Settings</h2>
            <p className="text-sm text-gray-600">Manage your account information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={profileForm.fullName}
              onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={profileForm.email}
              onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input
              type="text"
              value={profileForm.role}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={profileForm.phone}
              onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button 
            onClick={handleProfileSave}
            className="px-6 py-2 bg-[#4a9b9b] text-white rounded-lg hover:bg-[#3d8282] transition-colors"
          >
            Save Changes
          </button>
          <button 
            onClick={() => setProfileForm(profile)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Bell className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Notification Preferences</h2>
            <p className="text-sm text-gray-600">Configure how you receive notifications</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div className="font-medium text-gray-900">Email Notifications</div>
              <div className="text-sm text-gray-600">Receive email updates about program activities</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.emailNotifications}
                onChange={(e) => updateNotifications({ emailNotifications: e.target.checked })}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div className="font-medium text-gray-900">Participant Updates</div>
              <div className="text-sm text-gray-600">Get notified when participants complete milestones</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.participantUpdates}
                onChange={(e) => updateNotifications({ participantUpdates: e.target.checked })}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div className="font-medium text-gray-900">Financing Applications</div>
              <div className="text-sm text-gray-600">Alert for new loan applications and status changes</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.financingApplications}
                onChange={(e) => updateNotifications({ financingApplications: e.target.checked })}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div className="font-medium text-gray-900">Weekly Summary</div>
              <div className="text-sm text-gray-600">Receive weekly program performance summary</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.weeklySummary}
                onChange={(e) => updateNotifications({ weeklySummary: e.target.checked })}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <div className="font-medium text-gray-900">System Alerts</div>
              <div className="text-sm text-gray-600">Important system updates and maintenance notices</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.systemAlerts}
                onChange={(e) => updateNotifications({ systemAlerts: e.target.checked })}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Program Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Database className="text-purple-600" size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Program Settings</h2>
            <p className="text-sm text-gray-600">Configure program parameters and thresholds</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Program Name</label>
            <input
              type="text"
              value={programForm.programName}
              onChange={(e) => setProgramForm({ ...programForm, programName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Batch</label>
            <input
              type="text"
              value={programForm.currentBatch}
              onChange={(e) => setProgramForm({ ...programForm, currentBatch: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Program Duration (weeks)</label>
            <input
              type="number"
              value={programForm.programDuration}
              onChange={(e) => setProgramForm({ ...programForm, programDuration: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">At-Risk Threshold (%)</label>
            <input
              type="number"
              value={programForm.atRiskThreshold}
              onChange={(e) => setProgramForm({ ...programForm, atRiskThreshold: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6">
          <button 
            onClick={handleProgramSave}
            className="px-6 py-2 bg-[#4a9b9b] text-white rounded-lg hover:bg-[#3d8282] transition-colors"
          >
            Update Settings
          </button>
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Lock className="text-red-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Security</h2>
              <p className="text-sm text-gray-600">Password and authentication</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                value={passwordForm.current}
                onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={passwordForm.new}
                onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={passwordForm.confirm}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              />
            </div>
            <button 
              onClick={handlePasswordChange}
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Change Password
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                <div className="text-sm text-gray-600">Add extra security to your account</div>
              </div>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Disabled</Badge>
            </div>
            <button className="mt-3 text-sm text-[#4a9b9b] hover:text-[#3d8282] font-medium">
              Enable 2FA →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="text-green-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Privacy & Data</h2>
              <p className="text-sm text-gray-600">Control your data preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <div className="font-medium text-gray-900">Activity Tracking</div>
                <div className="text-sm text-gray-600">Track your activity for analytics</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={privacy.activityTracking}
                  onChange={(e) => updatePrivacy({ activityTracking: e.target.checked })}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <div className="font-medium text-gray-900">Data Sharing</div>
                <div className="text-sm text-gray-600">Share anonymized data for insights</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={privacy.dataSharing}
                  onChange={(e) => updatePrivacy({ dataSharing: e.target.checked })}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4a9b9b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a9b9b]"></div>
              </label>
            </div>

            <div className="py-3">
              <button className="text-sm text-[#4a9b9b] hover:text-[#3d8282] font-medium">
                Download My Data
              </button>
            </div>
            <div className="py-3">
              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Globe className="text-orange-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Language & Region</h2>
              <p className="text-sm text-gray-600">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select 
                value={region.language}
                onChange={(e) => updateRegion({ language: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              >
                <option>Bahasa Indonesia</option>
                <option>English</option>
                <option>العربية (Arabic)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select 
                value={region.timezone}
                onChange={(e) => updateRegion({ timezone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              >
                <option>Asia/Jakarta (WIB)</option>
                <option>Asia/Makassar (WITA)</option>
                <option>Asia/Jayapura (WIT)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
              <select 
                value={region.dateFormat}
                onChange={(e) => updateRegion({ dateFormat: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              >
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Palette className="text-indigo-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Appearance</h2>
              <p className="text-sm text-gray-600">Customize interface look</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => updateAppearance({ theme: 'light' })}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    appearance.theme === 'light' 
                      ? 'border-[#4a9b9b] bg-white shadow-sm' 
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900">Light</div>
                </button>
                <button 
                  onClick={() => updateAppearance({ theme: 'dark' })}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    appearance.theme === 'dark' 
                      ? 'border-[#4a9b9b] bg-gray-800 text-white shadow-sm' 
                      : 'border-gray-300 bg-gray-800 text-white hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">Dark</div>
                </button>
                <button 
                  onClick={() => updateAppearance({ theme: 'auto' })}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    appearance.theme === 'auto' 
                      ? 'border-[#4a9b9b] bg-white shadow-sm' 
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900">Auto</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sidebar Display</label>
              <select 
                value={appearance.sidebarDisplay}
                onChange={(e) => updateAppearance({ sidebarDisplay: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              >
                <option value="visible">Always Visible</option>
                <option value="auto-hide">Auto-hide</option>
                <option value="collapsed">Collapsed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Density</label>
              <select 
                value={appearance.density}
                onChange={(e) => updateAppearance({ density: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a9b9b] focus:border-transparent"
              >
                <option value="comfortable">Comfortable</option>
                <option value="compact">Compact</option>
                <option value="spacious">Spacious</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Mail className="text-gray-600" size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">System Information</h2>
            <p className="text-sm text-gray-600">Platform details and version</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Platform Version</div>
            <div className="font-semibold text-gray-900">v2.4.1</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Last Updated</div>
            <div className="font-semibold text-gray-900">Dec 28, 2025</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Support</div>
            <div className="font-semibold text-gray-900">support@awqafbiz.id</div>
          </div>
        </div>
      </div>
    </div>
  );
}
