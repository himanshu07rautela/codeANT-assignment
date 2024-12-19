import { clsx } from 'clsx';
import { repositories } from '../../data/repositories';

interface RepositoryListProps {
  searchQuery: string;
}

export default function RepositoryList({ searchQuery }: RepositoryListProps) {
  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredRepos.map((repo) => (
        <div
          key={repo.name}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-md hover:bg-gray-50"
        >
          <div className="mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{repo.name}</h3>
              <span className={clsx(
                'text-xs px-2 py-1 rounded-full',
                repo.visibility === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              )}>
                {repo.visibility}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {repo.type}
              </span>
              <span>{repo.size}</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Updated {repo.updatedAt}
          </div>
        </div>
      ))}
    </div>
  );
}