import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import { VideoParallax } from "./VideoParallax";
import { MainContent } from "./MainContent";
import { BottomParallax } from "./BottomParallax";
import { About } from "./About";

export const index = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <VideoParallax />
      <MainContent />
      <BottomParallax />
      <About />
      <Footer />
    </div>
  );
};
