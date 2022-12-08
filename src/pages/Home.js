import React from "react";
import { Header } from "../components/Header";
import { MainBlock } from "../components/MainBlock";

export const Home = () => {
  return(
    <>
      <Header/>
      <div className="main-block">
        <MainBlock />
      </div>
    </>
  )
}