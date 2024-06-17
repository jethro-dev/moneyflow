import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center">
        <Image src="/logo.svg" alt="MoneyFlow" height={40} width={40} />
        <p className="text-white font-semibold text-2xl ml-2.5">MoneyFlow</p>
      </div>
    </Link>
  );
};
