"use client"

import { departmentServices } from "@/api/queries/departmentService";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: departmentServices.getDepartments
  })

  console.log(data)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Momentum APP</h1>
    </div>
  );
}
