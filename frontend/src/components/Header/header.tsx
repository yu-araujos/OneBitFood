'use client'

import { Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"

export default function Header() {
  return (
    <Navbar
      bg="white"
      expand='lg'
      className="border-bottom border-custom-gray">
      <Navbar.Brand className="mx-3">
        <Link href='/'>
          <Image
            src={logo}
            alt="OneBitFood"
            width={200}
            height={44}
          />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}