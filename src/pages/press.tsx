import "./styles.css";
import PressArticle from "@/app/components/pressArticle";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NavBar from "../app/navbar";
import Footer from "@/app/footer";

export default function PressPage() {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <PressArticle />
      <Footer />
    </div>
  );
}