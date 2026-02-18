export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600 tracking-tight">
        UniIntern
      </div>
      <div className="flex gap-6 items-center">
        <a href="/auth/login" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Кіру</a>
        <a href="/auth/register" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Тіркелу</a>
      </div>
    </div>
  </nav>
);