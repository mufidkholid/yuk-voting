import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Button from "../Button";

export default function RestrictedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <Head>
        <title>Login</title>
      </Head>
      <Image src={"/images/logindulu.png"} alt="thinking" width={400} height={300} />
      <h1 className="text-4xl font-bold">Login Dulu Dongs!</h1>
      <h2>Untuk mengakses halaman ini, anda wajib login terlebih dahulu</h2>
      <Button onClick={signIn} text="Login" />
    </div>
  );
}
