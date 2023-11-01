"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Math",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Computer Science",
    url: "/blog",
  },
  {
    id: 4,
    title: "Electrical Engineering",
    url: "/about",
  },
  {
    id: 5,
    title: "Business",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Everything Hub
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (                                                        //maps to the links array above
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
