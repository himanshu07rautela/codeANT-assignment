export default function Stats() {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <img src="/ant_logo.png" alt="" className="w-6 h-6" />
          <span className="text-sm">AI to Detect & Autofix Bad Code</span>
        </div>
        <div className="flex gap-8">
          <div>
            <div className="text-sm text-gray-600">Language Support</div>
            <div className="font-semibold">30+</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Developers</div>
            <div className="font-semibold">10K+</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Hours Saved</div>
            <div className="font-semibold">100K+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 absolute -right-20 top-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <div className="text-sm">Issues Fixed</div>
        </div>
        <div className="text-2xl font-bold mt-1">500K+</div>
      </div>
    </div>
  );
}