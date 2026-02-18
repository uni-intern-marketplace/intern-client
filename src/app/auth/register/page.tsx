import { RegisterForm } from "../../../components/forms/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    // Негізгі контейнер: экранның ортасына қою және фон түсі
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        
        {/* Тақырып бөлімі */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Тіркелу
          </h2>
          <p className="mt-2 text-sm text-gray-500 font-medium">
            UniIntern жүйесіне қош келдіңіз
          </p>
        </div>

        {/* Тіркелу формасы компоненті */}
        <div className="mt-8">
          <RegisterForm />
        </div>

        {/* Төменгі сілтеме */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Аккаунтыңыз бар ма?{" "}
            <Link 
              href="/auth/login" 
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Кіру
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}