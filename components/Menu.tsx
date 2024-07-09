import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";

export default function Menu() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between py-3 container mx-auto">
        <Link href="/">
          <p className="font-bold text-2xl">Yuk-Voting</p>
        </Link>
        {session ? (
          <div className="space-x-3">
            <span>{session.user.name}</span>
            <Button onClick={signOut} text="Logout" />
          </div>
        ) : (
          <Button onClick={signIn} text="Login" />
        )}
      </div>
    </nav>
  );
}
