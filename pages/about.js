import WelcomeComponent from "./Components/WelcomeComponent";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <WelcomeComponent />
    </div>
  );
};

export default About;
