import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import NavigationBar from "./NavigationBar";
import { VideoParallax } from "./VideoParallax";
import { BottomParallax } from "./BottomParallax";
import { About } from "./About";
import ProductList from "./ProductList";

export const index = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <VideoParallax />
      <ProductList />
      <BottomParallax />
      <About />
      <Footer />
    </div>
  );
};
