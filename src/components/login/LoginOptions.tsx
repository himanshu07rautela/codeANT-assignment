import { useState } from 'react';
import { Github, Gitlab } from 'lucide-react';
import { clsx } from 'clsx';

export default function LoginOptions() {
  const [mode, setMode] = useState<'saas' | 'self-hosted'>('saas');

  const renderLoginButtons = () => {
    if (mode === 'saas') {
      return (
        <>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
            <Github className="w-5 h-5" />
            Sign in with Github
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
            <img src="/bitbucket.svg" alt="Bitbucket" className="w-5 h-5" />
            Sign in with Bitbucket
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
            <img src="/azure.svg" alt="Azure DevOps" className="w-5 h-5" />
            Sign in with Azure Devops
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
            <Gitlab className="w-5 h-5 text-orange-600" />
            Sign in with GitLab
          </button>
        </>
      );
    }

    return (
      <>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
          <Gitlab className="w-5 h-5 text-orange-600" />
          Self Hosted GitLab
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-50">
          <img src="/sso key.png" alt="SSO" className="w-5 h-5" />
          Sign in with SSO
        </button>
      </>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center">
        <button 
          className={clsx(
            "flex-1 py-2 rounded-md transition-colors",
            mode === 'saas' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
          )}
          onClick={() => setMode('saas')}
        >
          SAAS
        </button>
        <button 
          className={clsx(
            "flex-1 py-2 rounded-md transition-colors",
            mode === 'self-hosted' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
          )}
          onClick={() => setMode('self-hosted')}
        >
          Self Hosted
        </button>
      </div>

      <div className="space-y-3">
        {renderLoginButtons()}
      </div>
    </div>
  );
}