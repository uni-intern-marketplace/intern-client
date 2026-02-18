"use client";
export const InternshipPostForm = () => {
  return (
    <div className="space-y-4 max-w-lg">
      <input type="text" placeholder="Лауазым атауы (м-лы: Frontend Developer)" className="w-full border p-2 rounded" />
      <textarea placeholder="Тағылымдама сипаттамасы" className="w-full border p-2 rounded" rows={4} />
      <input type="text" placeholder="Технологиялар (React, Node.js)" className="w-full border p-2 rounded" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Жариялау</button>
    </div>
  );
};