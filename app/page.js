"use client"; 
import React from "react";
import "@/styles/_home.scss";
import SliderBanner from '../components/homeComponents/sliderBanner';


export default function Home() {
  return (
    <div className="home-wrapper">
      <SliderBanner />
    </div>
  );
}
