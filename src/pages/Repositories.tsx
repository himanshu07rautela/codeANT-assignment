import { useState } from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';
import RepositoryList from '../components/repository/RepositoryList';
import RepositoryHeader from '../components/repository/RepositoryHeader';
import SearchBar from '../components/repository/SearchBar';
import MobileHeader from '../components/common/MobileHeader';

function Repositories() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader onMenuOpen={() => setIsMobileMenuOpen(true)} />

      <div className="flex">
        <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <RepositoryHeader />
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <RepositoryList searchQuery={searchQuery} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Repositories;