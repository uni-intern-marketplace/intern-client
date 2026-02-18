export const LoginForm = () => (
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Қош келдіңіз!</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="example@mail.com" className="input-style" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Құпия сөз</label>
        <input type="password" placeholder="••••••••" className="input-style" />
      </div>
      <button className="w-full btn-primary mt-6">Жүйеге кіру</button>
    </div>
  </div>
);