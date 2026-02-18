import { useState, useEffect } from "react";
import { internshipService } from "../services/internship.service";
import { Internship } from "../types/internship";

export const useInternships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    internshipService.getAll()
      .then(setInternships)
      .finally(() => setLoading(false));
  }, []);

  return { internships, loading };
};