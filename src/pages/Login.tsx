import Logo from '../components/Logo';
import Stats from '../components/Stats';
import LoginOptions from '../components/login/LoginOptions';

function Login() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Stats */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative">
        <Stats />
        <div className="absolute left-0 bottom-0">
          <img src="/ant_logo.png" alt="" className="w-96 opacity-20" />
        </div>
      </div>

      {/* Right Section - Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Logo className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold">Welcome to CodeAnt AI</h2>
          </div>

          <LoginOptions />

          <p className="text-center text-sm text-gray-600">
            By signing up you agree to the{' '}
            <a href="#" className="text-gray-900 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;