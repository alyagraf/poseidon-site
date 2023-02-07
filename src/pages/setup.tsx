import "./styles.css";
import Setup from "@/app/components/step-by-step";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NavBar from "../app/navbar";
import Footer from "@/app/footer";

export default function PressPage() {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <Setup />
      <Footer />
    </div>
  );
}