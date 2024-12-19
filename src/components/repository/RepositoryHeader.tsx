import { RefreshCw, Plus } from 'lucide-react';

export default function RepositoryHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl font-semibold">Repositories</h1>
        <p className="text-gray-600">33 total repositories</p>
      </div>
      <div className="flex flex-row gap-2">
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
          <RefreshCw className="w-4 h-4" />
          Refresh All
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Add Repository
        </button>
      </div>
    </div>
  );
}