import { Card } from "../../../components/ui/Card";

export default function StudentDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Студент панелі</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><h3>Менің өтінімдерім</h3><p className="text-2xl">0</p></Card>
        <Card><h3>Белсенді тағылымдамалар</h3><p className="text-2xl">12</p></Card>
        <Card><h3>Хабарламалар</h3><p className="text-2xl">3</p></Card>
      </div>
    </div>
  );
}