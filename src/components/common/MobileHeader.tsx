import Logo from '../Logo';

interface MobileHeaderProps {
  onMenuOpen: () => void;
}

export default function MobileHeader({ onMenuOpen }: MobileHeaderProps) {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <Logo className="w-8 h-8" />
        <span className="font-semibold">CodeAnt AI</span>
      </div>
      <button
        onClick={onMenuOpen}
        className="p-2 hover:bg-gray-100 rounded-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}