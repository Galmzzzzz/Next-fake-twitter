'use client';

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileFake() {
  const router = useRouter();

  return (
    <>
      <div>user profile:</div>
      <button onClick={() => router.push(PAGES.HOME())}>Go to home</button>
    </>
  );
}
