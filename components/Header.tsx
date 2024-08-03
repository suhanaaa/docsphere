import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

//We can do this or also we can make another file and store all the types in that file here in our project we have created a "types/index.d.ts"
// type HeaderProps = {
//   children: React.ReactNode;
// };

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="logi with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          height={32}
          width={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
