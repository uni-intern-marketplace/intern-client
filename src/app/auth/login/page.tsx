import { LoginForm } from "../../../components/forms/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Жүйеге кіру</h2>
          <p className="mt-2 text-sm text-gray-600">
            Тағылымдамалар әлеміне қош келдіңіз
          </p>
        </div>
        
        <LoginForm />

        <div className="text-center text-sm">
          <p className="text-gray-500">
            Аккаунтыңыз жоқ па?{" "}
            <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
              Тіркелу
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}