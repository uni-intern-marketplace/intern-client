import { Card } from "../../../../components/ui/Card";

export default function VerifyCompanies() {
  const pendingCompanies = [
    { id: 101, name: "Tech Solutions", industry: "Software" },
    { id: 102, name: "Data Masters", industry: "Big Data" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Компанияларды тексеру</h1>
      <div className="grid gap-4">
        {pendingCompanies.map((comp) => (
          <Card key={comp.id} className="flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-lg">{comp.name}</h3>
              <p className="text-sm text-gray-500">{comp.industry}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm transition-colors">
                Растау
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm transition-colors">
                Бас тарту
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}