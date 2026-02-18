import Link from 'next/link';
import { LayoutDashboard, Briefcase, User, Settings } from 'lucide-react';

export const Sidebar = ({ role }: { role: 'student' | 'employer' }) => {
  const menuItems = role === 'student' 
    ? [
        { name: 'Басты бет', href: '/dashboard/student', icon: LayoutDashboard },
        { name: 'Стажировкалар', href: '/dashboard/student/internships', icon: Briefcase },
        { name: 'Профиль', href: '/dashboard/student/profile', icon: User },
      ]
    : [
        { name: 'Басты бет', href: '/dashboard/employer', icon: LayoutDashboard },
        { name: 'Вакансиялар', href: '/dashboard/employer/jobs', icon: Briefcase },
        { name: 'Баптаулар', href: '/dashboard/employer/settings', icon: Settings },
      ];

  return (
    <aside className="w-64 bg-white border-r min-h-[calc(100vh-64px)] p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};