import { Card } from "../ui/Card";

export const StudentCard = ({ student }: { student: any }) => (
  <Card className="hover:border-blue-300 transition-colors">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">🎓</div>
      <div>
        <h4 className="font-bold">{student.name}</h4>
        <p className="text-xs text-gray-500">{student.major}</p>
      </div>
    </div>
  </Card>
);