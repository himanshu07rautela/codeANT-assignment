import { Home, Code, Cloud, HelpCircle, Settings, PhoneCall, LogOut, X } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Repositories', path: '/repositories' },
  { icon: Code, label: 'AI Code Review', path: '/code-review' },
  { icon: Cloud, label: 'Cloud Security', path: '/cloud-security' },
  { icon: HelpCircle, label: 'How to Use', path: '/how-to-use' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: PhoneCall, label: 'Support', path: '/support' },
  { icon: LogOut, label: 'Logout', path: '/' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r z-50 transform transition-transform duration-200 ease-in-out lg:transform-none',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-3">
              <select className="w-full p-2 border rounded-md mb-4">
                <option>UtkarshDhairyaPanwar</option>
              </select>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}