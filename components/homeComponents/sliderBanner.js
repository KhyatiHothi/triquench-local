"use client"; 
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerBG  from "../../public/images/banner-prop.png";
import slide1Img from "../../public/images/slide1.png";
import slide2Img from "../../public/images/slide2.png";
import slide3Img from "../../public/images/slide3.png";
import Image from "next/image";
import "swiper/css";
import 'swiper/swiper-bundle.css';

export default function SliderBanner() {
    return (
      <section className="banner-section relative">
        <Image src={bannerBG} alt="Triqunch" className="bg-img" />
        <div className="container">
          <div className="slider-navgation-wrapper">
            <div className="banner-navigation-wrapper">
              <div className="white-box">
                <span className="title">Navigation</span>
                <ul className="dot-list">
                  <li>
                    <a href="#" title="Spindle For Wood">Spindle For Wood</a>
                  </li>
                  <li>
                    <a href="#" title="Spindle For Stone">Spindle For Stone</a>
                  </li>
                  <li>
                    <a href="#" title="Spindle For Aluminum">Spindle For Aluminum</a>
                  </li>
                  <li>
                    <a href="#" title="Spindle for jewelry Making">Spindle for jewelry Making</a>
                  </li>
                  <li>
                    <a href="#" title="Edge Banding Spindle">Edge Banding Spindle</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="slider-wrapper">
              <Swiper
                modules={[Navigation, Autoplay ]} // Include modules here
                spaceBetween={50} // Adjust the spacing between slides
                slidesPerView={1} // Number of slides visible at the same time
                navigation // Enable navigation arrows
                effect="fade"
                autoplay={{ delay: 6000 }} // Enable autoplay with delay
                fadeEffect={{ crossFade: true }}
              >
                <SwiperSlide>
                  <div className="swiper-flex-wrap">
                    <div className="left">
                      <span className="sub-title">Building High Trust </span>
                      <h1>Relationship through our Quality Spindles</h1>
                      <p>We provide “Intelligent Spindle Solutions” and Aspiring to be of Service to Society and Grow along with it.</p>
                      <div className="btn-wrapper m-t-20">
                        <a href="" className="white-btn" title="Shop Now">
                        Shop Now
                        </a>
                        <a href="" className="white-border-btn" title="View Products">
                        View Products
                        </a>
                      </div>
                    </div>
                    <div className="right">
                      <Image src={slide1Img} alt="Product image"/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-flex-wrap">
                  <div className="left">
                      <span className="sub-title">Building High Trust </span>
                      <h2 className="h1">Relationship through our Quality Spindles</h2>
                      <p>We provide “Intelligent Spindle Solutions” and Aspiring to be of Service to Society and Grow along with it.</p>
                      <div className="btn-wrapper m-t-20">
                        <a href="" className="white-btn" title="Shop Now">
                        Shop Now
                        </a>
                        <a href="" className="white-border-btn" title="View Products">
                        View Products
                        </a>
                      </div>
                  </div>
                  <div className="right">
                    <Image src={slide2Img} alt="Product image"/>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-flex-wrap">
                  <div className="left">
                      <span className="sub-title">Building High Trust </span>
                      <h2 className="h1">Relationship through our Quality Spindles</h2>
                      <p>We provide “Intelligent Spindle Solutions” and Aspiring to be of Service to Society and Grow along with it.</p>
                      <div className="btn-wrapper m-t-20">
                        <a href="" className="white-btn" title="Shop Now">
                        Shop Now
                        </a>
                        <a href="" className="white-border-btn" title="View Products">
                        View Products
                        </a>
                      </div>
                  </div>
                  <div className="right">
                    <Image src={slide3Img} alt="Product image"/>
                  </div>
                </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
}