import { InternshipPostForm } from "../../../../components/forms/InternshipPostForm";

export default function PostJobPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Жаңа тағылымдама жариялау</h1>
      <div className="bg-white p-6 shadow rounded-lg border">
        <InternshipPostForm />
      </div>
    </div>
  );
}