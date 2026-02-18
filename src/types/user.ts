export type Role = 'student' | 'employer' | 'admin';

export interface User {
  id: string;
  email: string;
  role: Role;
  fullName: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface StudentProfile extends User {
  university: string;
  major: string;
  gpa?: number;
  skills: string[];
  resumeUrl?: string;
}

export interface EmployerProfile extends User {
  companyName: string;
  description: string;
  website?: string;
  isVerified: boolean;
}