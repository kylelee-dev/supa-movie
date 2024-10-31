"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="">
      <Link className="flex items-center gap-1" href="/">
        <Image
          alt="Main Logo"
          src="/images/supa-logo.png"
          width={50}
          height={30}
          className="!w-8 !h-auto"
        />
        <span className="text-xl font-bold text-supa">SupaMovie</span>
      </Link>
    </div>
  );
}
