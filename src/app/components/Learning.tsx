import { BookOpen, Video, FileText, CheckCircle, Clock, Award, PlayCircle, Lock } from 'lucide-react';
import { Badge } from './ui/badge';

interface Course {
  id: string;
  title: string;
  category: string;
  modules: number;
  completed: number;
  duration: string;
  status: 'In Progress' | 'Completed' | 'Locked';
  progress: number;
  instructor: string;
}

interface Module {
  id: string;
  title: string;
  type: 'Video' | 'Reading' | 'Quiz';
  duration: string;
  completed: boolean;
}

export function Learning() {
  const courses: Course[] = [
    { id: '1', title: 'Entrepreneurship Fundamentals', category: 'Mindset & Foundation', modules: 8, completed: 8, duration: '4 hours', status: 'Completed', progress: 100, instructor: 'Dr. Ahmad Fauzi' },
    { id: '2', title: 'Business Model Canvas', category: 'Business Planning', modules: 6, completed: 5, duration: '3 hours', status: 'In Progress', progress: 83, instructor: 'Coach Sari' },
    { id: '3', title: 'Digital Marketing Essentials', category: 'Marketing', modules: 10, completed: 7, duration: '5 hours', status: 'In Progress', progress: 70, instructor: 'Budi Hartono' },
    { id: '4', title: 'Financial Management for SMEs', category: 'Finance', modules: 9, completed: 4, duration: '4.5 hours', status: 'In Progress', progress: 44, instructor: 'Dewi Kusuma' },
    { id: '5', title: 'Product Development & Innovation', category: 'Product', modules: 7, completed: 0, duration: '3.5 hours', status: 'Locked', progress: 0, instructor: 'Rudi Pratama' },
    { id: '6', title: 'AI Tools for Business', category: 'Technology', modules: 5, completed: 0, duration: '2.5 hours', status: 'Locked', progress: 0, instructor: 'Maya Chen' },
  ];

  const currentModules: Module[] = [
    { id: '1', title: 'Introduction to Business Model Canvas', type: 'Video', duration: '25 min', completed: true },
    { id: '2', title: 'Value Proposition Design', type: 'Video', duration: '30 min', completed: true },
    { id: '3', title: 'Customer Segments & Relationships', type: 'Reading', duration: '15 min', completed: true },
    { id: '4', title: 'Revenue Streams & Cost Structure', type: 'Video', duration: '28 min', completed: true },
    { id: '5', title: 'Case Study: Successful Business Models', type: 'Reading', duration: '20 min', completed: true },
    { id: '6', title: 'Create Your Business Model Canvas', type: 'Quiz', duration: '30 min', completed: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'Locked':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return <Video size={16} className="text-purple-600" />;
      case 'Reading':
        return <FileText size={16} className="text-blue-600" />;
      case 'Quiz':
        return <FileText size={16} className="text-orange-600" />;
      default:
        return <FileText size={16} />;
    }
  };

  const totalModules = courses.reduce((acc, course) => acc + course.modules, 0);
  const completedModules = courses.reduce((acc, course) => acc + course.completed, 0);
  const overallProgress = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="p-8 space-y-6">
      {/* Learning Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Courses</div>
              <div className="text-3xl font-semibold text-gray-900">{courses.length}</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Completed</div>
              <div className="text-3xl font-semibold text-green-600">
                {courses.filter(c => c.status === 'Completed').length}
              </div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">In Progress</div>
              <div className="text-3xl font-semibold text-blue-600">
                {courses.filter(c => c.status === 'In Progress').length}
              </div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Overall Progress</div>
              <div className="text-3xl font-semibold text-gray-900">{overallProgress}%</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Current Course Focus */}
      <div className="bg-gradient-to-r from-[#4a9b9b] to-[#3d8282] rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm opacity-90 mb-1">Continue Learning</div>
            <h3 className="text-2xl font-semibold mb-2">Business Model Canvas</h3>
            <p className="text-sm opacity-90 mb-4">Module 6 of 6 • Create Your Business Model Canvas</p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-white text-[#4a9b9b] rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Continue Learning
              </button>
              <div className="text-sm">
                <span className="font-semibold">83%</span> complete
              </div>
            </div>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <PlayCircle size={48} />
          </div>
        </div>
      </div>

      {/* Current Course Modules */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Business Model Canvas - Course Modules</h2>
        <div className="space-y-2">
          {currentModules.map((module, index) => (
            <div
              key={module.id}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                module.completed
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  module.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {module.completed ? <CheckCircle size={18} /> : <span className="text-sm">{index + 1}</span>}
                </div>
                <div className="flex items-center gap-3">
                  {getModuleIcon(module.type)}
                  <div>
                    <div className="font-medium text-gray-900">{module.title}</div>
                    <div className="text-sm text-gray-500">{module.type} • {module.duration}</div>
                  </div>
                </div>
              </div>
              {!module.completed && (
                <button className="px-4 py-2 bg-[#4a9b9b] text-white rounded hover:bg-[#3d8282] transition-colors text-sm">
                  Start
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* All Courses */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">All Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`border rounded-lg p-5 transition-all ${
                course.status === 'Locked'
                  ? 'bg-gray-50 border-gray-200 opacity-60'
                  : 'bg-white border-gray-200 hover:shadow-md cursor-pointer'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge className={getStatusColor(course.status)}>
                  {course.status}
                </Badge>
                {course.status === 'Locked' && <Lock size={18} className="text-gray-400" />}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.category}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{course.completed}/{course.modules} modules</span>
                  <span>{course.duration}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#4a9b9b] transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Instructor</div>
                  <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
                </div>

                {course.status !== 'Locked' && (
                  <button className="w-full py-2 bg-[#4a9b9b] text-white rounded hover:bg-[#3d8282] transition-colors text-sm font-medium mt-2">
                    {course.status === 'Completed' ? 'Review Course' : 'Continue Course'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Recommended Learning Path</h2>
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-48 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
              <div className="text-xs text-green-700 font-semibold mb-1">COMPLETED</div>
              <div className="font-medium text-gray-900">Stage 1: Fundamentals</div>
              <div className="text-xs text-gray-600 mt-1">Entrepreneurship basics</div>
            </div>
            <div className="flex-shrink-0 text-gray-400">→</div>
            <div className="flex-shrink-0 w-48 p-4 bg-blue-50 border-2 border-blue-500 rounded-lg">
              <div className="text-xs text-blue-700 font-semibold mb-1">IN PROGRESS</div>
              <div className="font-medium text-gray-900">Stage 2: Business Planning</div>
              <div className="text-xs text-gray-600 mt-1">BMC & Strategy</div>
            </div>
            <div className="flex-shrink-0 text-gray-400">→</div>
            <div className="flex-shrink-0 w-48 p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
              <div className="text-xs text-gray-700 font-semibold mb-1">NEXT</div>
              <div className="font-medium text-gray-900">Stage 3: Marketing</div>
              <div className="text-xs text-gray-600 mt-1">Digital strategies</div>
            </div>
            <div className="flex-shrink-0 text-gray-400">→</div>
            <div className="flex-shrink-0 w-48 p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
              <div className="text-xs text-gray-700 font-semibold mb-1">LOCKED</div>
              <div className="font-medium text-gray-900">Stage 4: Finance</div>
              <div className="text-xs text-gray-600 mt-1">Financial management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
