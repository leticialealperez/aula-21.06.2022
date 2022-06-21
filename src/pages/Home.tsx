import React from "react";
import Header from "../components/Header/Header";

interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Header />

      <main></main>
    </>
  );
};

export default Home;
