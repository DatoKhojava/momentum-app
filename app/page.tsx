"use client"

import { departmentServices } from "@/api/queries/departmentService";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: departmentServices.getDepartments
  })

  return (
    <div>
      <h1>💡 Momentum - Progress Tracking Software</h1>
      <Button>Click me</Button>
    </div>
  );
}
