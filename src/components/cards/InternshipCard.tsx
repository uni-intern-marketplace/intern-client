import { Internship } from '../../types';
import { MapPin, Building2, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const InternshipCard = ({ internship }: { internship: Internship }) => {
  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{internship.title}</h3>
          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <Building2 size={16} />
            <span>{internship.companyName}</span>
          </div>
        </div>
        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {internship.type}
        </span>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Мерзімі: {internship.deadline}</span>
        </div>
      </div>

      <Button variant="outline" className="w-full">Толығырақ көру</Button>
    </div>
  );
};