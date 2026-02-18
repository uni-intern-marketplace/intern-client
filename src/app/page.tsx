import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto text-center py-20 px-6">
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
        Университет пен мансап арасындағы <br />
        <span className="text-blue-600">сенімді көпір</span>
      </h1>
      <p className="mt-6 text-xl text-gray-500">
        Өзіңізге лайықты тағылымдаманы табыңыз.
      </p>
      <div className="mt-10 flex gap-4 justify-center">
        <Link href="/auth/register" className="btn-primary">Бастау</Link>
        <Link href="/about" className="btn-secondary">Біз туралы</Link>
      </div>
    </main>
  );
}