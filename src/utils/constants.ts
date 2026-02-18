export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const USER_ROLES = {
  STUDENT: 'student',
  EMPLOYER: 'employer',
  ADMIN: 'admin',
} as const;

export const INTERNSHIP_STATUS = {
  OPEN: 'open',
  CLOSED: 'closed',
} as const;