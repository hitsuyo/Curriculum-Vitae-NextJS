// 'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import axios from "axios"

export default async function SimpleHeader() {
  const navigation1 = new Map();
  navigation1.set("id", 1);
  navigation1.set("link", "Link 1");
  navigation1.set("label", "Label 1");

  const navigation2 = new Map();
  navigation1.set("id", 2);
  navigation2.set("link", "Link 2");
  navigation2.set("label", "Label 2");

  const navigation3 = new Map();
  navigation1.set("id", 3);
  navigation3.set("link", "Link 3");
  navigation3.set("label", "Label 3");

  const navigationArr = [navigation1, navigation2, navigation3];

  return (
    <header>
      <Link href="/">Header</Link>
      <Link href="/auth/me" className="p-5">
        Profile
      </Link>
      <a className="bg-black-600" href="/api/logout">
        Logout
      </a>
      <nav>
        <ul>
          {navigationArr.map((navi) => (
            <li key={navi.get("id")}>
              <Link href='{navi.get("link")}'>{navi.get("label")}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
