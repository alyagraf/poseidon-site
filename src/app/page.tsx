'use client'
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NavBar from "./navbar";
import BodyComponent from "./mainbody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="slate-900">
      <NavBar />
      <BodyComponent />
    </div>
  );
}
