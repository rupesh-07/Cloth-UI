import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import CollectionCloth from "../Components/CollectionCloth";
import ChooseUs from "../Components/ChooseUs";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <CollectionCloth />
      <ChooseUs />
      <Footer />
    </>
  );
}
