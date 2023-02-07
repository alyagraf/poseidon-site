import "./styles.css";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NavBar from "../app/navbar";
import Creators from "../app/components/creatorsCompo";

export default function About() {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <Creators />
    </div>
  );
}
