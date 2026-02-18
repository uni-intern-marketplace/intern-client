import { Card } from "../../../../components/ui/Card";
import { Badge } from "../../../../components/ui/Badge";

export default function MyInternships() {
  const applications = [
    { id: 1, company: "Google", position: "Frontend Intern", status: "Қабылданды" },
    { id: 2, company: "Kaspi", position: "Backend Developer", status: "Күтуде" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Менің өтінімдерім</h1>
      <div className="space-y-4">
        {applications.map((app) => (
          <Card key={app.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">{app.position}</h3>
              <p className="text-sm text-gray-500">{app.company}</p>
            </div>
            <Badge variant={app.status === "Қабылданды" ? "success" : "default"}>
              {app.status}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}