import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WelcomeComponent from "./Components/WelcomeComponent";
import ButtonMessage from "./Components/ButtonMessage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Test01 Diego</title>
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* using component to display heading and message */}
        <WelcomeComponent />

        <main className={styles.main}>
          <div className={styles.ctas}>
            <h1>Inside main block</h1>
          </div>

          <ButtonMessage />
        </main>
        <footer className={styles.footer}>
          <p>This is my footer</p>
        </footer>
      </div>
    </>
  );
}
