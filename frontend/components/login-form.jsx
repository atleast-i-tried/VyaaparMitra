"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast, Toaster } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res?.ok) {
      toast.success("Logged in successfully");
      router.push("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20"
                height="20"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.648 
                4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 
                12-12c3.059 0 5.843 1.154 7.961 
                3.039l5.657-5.657C33.441 6.145 28.963 
                4 24 4 12.955 4 4 12.955 4 24s8.955 20 
                20 20c11.045 0 20-8.955 20-20 
                0-1.341-.138-2.651-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.586 
                4.827C14.655 16.041 18.961 14 24 
                14c3.059 0 5.843 1.154 7.961 
                3.039l5.657-5.657C33.441 6.145 28.963 
                4 24 4c-7.935 0-14.676 4.736-17.694 
                11.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c4.817 0 9.199-1.836 
                12.566-4.827l-5.799-4.924C28.792 
                36.091 26.477 37 24 37c-5.203 0-9.632-3.343-11.287-8.001l-6.583 
                5.081C9.293 39.264 16.133 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303c-.792 
                2.237-2.264 4.149-4.146 
                5.505l.001.001 6.004 4.899C39.091 
                35.657 44 30.333 44 24c0-1.341-.138-2.651-.389-3.917z"
                />
              </svg>
              Login with Google
            </Button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster position="bottom-left" richColors />
    </>
  );
}