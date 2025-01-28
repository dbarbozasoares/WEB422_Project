import React from "react";
import Head from "next/head";

const WelcomeComponent = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Head>
        <title>Test01 Diego</title>
      </Head>
      <nav style={{ paddingTop: "20vh", textAlign: "center" }}>
        <a
          style={{
            backgroundColor: "lightblue",
            color: "black",
            textAlign: "center",
            fontSize: "27.5px",
            fontWeight: "bolder",
            margin: "12px",
          }}
          href="./"
        >
          Index
        </a>
        <a
          style={{
            backgroundColor: "lightblue",
            color: "black",
            textAlign: "center",
            fontSize: "27.5px",
            fontWeight: "bolder",
            margin: "12px",
          }}
          href="/about"
        >
          About
        </a>
      </nav>
      <header>
        <h1>Welcome to my page</h1>
        <br></br>
        <p>
          On this blog I will post about my journey in WEB422 at Seneca College
        </p>
      </header>
      <div>
        <img src="/car.jpg" width={300} height={200} />
      </div>
    </div>
  );
};

export default WelcomeComponent;
