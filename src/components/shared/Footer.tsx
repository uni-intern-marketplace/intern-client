export const Footer = () => {
  return (
    <footer className="border-t bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} UniIntern. Барлық құқықтар қорғалған.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600 transition">Біз туралы</a>
            <a href="#" className="hover:text-blue-600 transition">Көмек</a>
            <a href="#" className="hover:text-blue-600 transition">Контактілер</a>
          </div>
        </div>
      </div>
    </footer>
  );
};