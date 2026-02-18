import { Card } from "../../../../components/ui/Card";
import { Button } from "../../../../components/ui/Button";

export default function StudentProfile() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Менің профилім</h1>
      <Card className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">JS</div>
          <div>
            <h2 className="text-xl font-semibold">Жас Студент</h2>
            <p className="text-gray-500">IT мамандығы, 3-курс</p>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="font-medium">Дағдылар:</h3>
          <p className="text-sm text-gray-600">React, TypeScript, Node.js, PostgreSQL</p>
        </div>
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Профильді өңдеу</Button>
      </Card>
    </div>
  );
}