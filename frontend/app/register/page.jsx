"use client";

import { RegisterForm } from "@/components/register-form";
import { IconBrandSketch } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IconLoader2 } from "@tabler/icons-react";

export default function RegisterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if user is already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  // Show loader while session is being checked
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <IconLoader2 className="w-10 h-10 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <IconBrandSketch className="size-4" />
            </div>
            VyaaparMitra
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/Loginimage.jpg"
          alt="Register Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
