import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { lusitana, montserrat, openSans } from "@/app/ui/fonts";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "../button";
import Link from "next/link";
import SofeLogo from "../sofe-logo";
import TextInput from "../text-input";

export default function LoginForm() {
  return (
    <form className="space-y-3 px-6">
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
        <Button className="btn-outline w-full rounded-full py-4 relative hover:btn-primary">
          <p className="text-sm">Log in</p>
          <ArrowRightIcon height={24} className="absolute right-6" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        <div className="flex gap-3">
          <p className="text-muted">Don't have an account?</p>
          <Link href="/sign-up" as="create-account">
            <p className="text-">Sign up</p>
          </Link>
        </div>
      </div>
    </form>
  );
}
