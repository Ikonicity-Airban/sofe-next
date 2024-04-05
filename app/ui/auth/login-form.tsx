'use client'

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "../button";
import { LINKS } from "@/app/lib/constants";
import Link from "next/link";
import TextInput from "../text-input";
import { openSans } from "@/app/ui/fonts";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/firebase";

export default function LoginForm() {
  const provider = new GoogleAuthProvider();
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <form className="space-y-3 px-6 max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="flex-1 rounded-lg backdrop-filter px-6 pb-4">
        <h1
          className={`${openSans.className} mb-3 text-2xl uppercase text-center gradient-background rounded-b-full py-4`}
        >
          Login
        </h1>
        <div className="grid gap-6 my-10">
          <TextInput name="email" type="email" />
          <TextInput name="password" type="password" />
        </div>
        <Button
          type="submit"
          className="btn-outline w-full rounded-full py-4 relative hover:btn-primary"
        >
          <p className="text-sm">Log in</p>
          <ArrowRightIcon height={24} className="absolute right-6" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        <div className="flex gap-3">
          <p className="text-muted">Don't have an account?</p>
          <Link href={LINKS.login} as="create-account">
            <p className="text-">Sign up</p>
          </Link>
        </div>
      </div>
    </form>
  );
}
