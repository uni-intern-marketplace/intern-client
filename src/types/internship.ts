export interface Internship {
  id: string;
  title: string;
  description: string;
  companyId: string;
  companyName: string;
  location: string;
  type: 'remote' | 'office' | 'hybrid';
  salary?: string;
  requirements: string[];
  tags: string[];
  status: 'open' | 'closed';
  createdAt: string;
  deadline: string;
}

export interface Application {
  id: string;
  internshipId: string;
  studentId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
  coverLetter?: string;
}