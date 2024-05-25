import React, { useEffect, useRef, useState } from "react";
import "../Styles/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import Modal from "react-awesome-modal";
import Map from "./Map";

export default function Main() {
  //Modal
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };
  //Language
  const { t, i18n } = useTranslation();
  const images = [
    {
      id: 1,
      imgUrl: "Images/istanbul.jpg",
      name: t("cities.Istanbul"),
      peop: "74.16",
    },
    {
      id: 1,
      imgUrl: "Images/yaponiya.png",
      name: t("cities.Tokio"),
      peop: "99.76",
    },
    {
      id: 1,
      imgUrl: "Images/kuala.jpg",
      name: t("cities.Kuala-Lumpur"),
      peop: "67.89",
    },
    {
      id: 1,
      imgUrl: "Images/madrid.jpg",
      name: t("cities.Madrid"),
      peop: "54.58",
    },
    {
      id: 1,
      imgUrl: "Images/paris.jpg",
      name: t("cities.Parij"),
      peop: "45.16",
    },
  ];
  const cards = [
    {
      id: 1,
      imgUrl: "Images/istanbul1.jpg",
      name: t("cities.Istanbul"),
      price: "450",
    },
    {
      id: 2,
      imgUrl: "Images/yaponiya.png",
      name: t("cities.Tokio"),
      price: "650",
    },
    { id: 3, imgUrl: "Images/doha.jpg", name: t("cities.Doha"), price: "800" },
    {
      id: 4,
      imgUrl: "Images/kuala.jpg",
      name: t("cities.Kuala-Lumpur"),
      price: "400",
    },
    {
      id: 5,
      imgUrl: "Images/paris.jpg",
      name: t("cities.Parij"),
      price: "500",
    },
    {
      id: 6,
      imgUrl: "Images/madrid.jpg",
      name: t("cities.Madrid"),
      price: "600",
    },
    {
      id: 7,
      imgUrl: "Images/malayziya.jpg",
      name: t("cities.Malayziya"),
      price: "750",
    },
    {
      id: 8,
      imgUrl: "Images/newyork.jpg",
      name: t("cities.New-York"),
      price: "850",
    },
    { id: 9, imgUrl: "Images/avs.jpg", name: t("cities.Sidney"), price: "950" },
  ];
  const [check, setCheck] = useState(false);
  const navbarItem = useRef();
  const carousel = useRef();
  const sliderRef = useRef(null);
  //slider bila bog'liq funksiya va amallar
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext1 = () => {
    carousel.current.slickNext();
  };
  const handlePrev1 = () => {
    carousel.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
  };
  const slides = useRef();
  const btn = [
    { id: 1, name: "Button" },
    { id: 2, name: "Button" },
    { id: 3, name: "Button" },
    { id: 4, name: "Button" },
  ];
  //xarita bilan boq'liq funksiyalar
  

  // Til o'zgartish  bilan bog'liq funksiyalar

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCheck(!check);
  };
  const about = useRef(null);
  const home = useRef(null);
  const tour = useRef(null);
  const contact = useRef(null);
  const handleScroll = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCheck(!check);
  };
  const handleClick = (e, sectionRef) => {
    e.preventDefault();
    handleScroll(sectionRef);
  };

  //gallery image
  const [expandedImage, setExpandedImage] = useState(0);
  const handleClick1 = (index) => {
    setExpandedImage(index);
  };
  //sen message
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [personCount, setPersonCount] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const botToken = "7052194344:AAE8saoVepGx29Fk1CMnTh5D-ZnOTvJQKIU";
  const chatId = "6479931688";

  const handleSubmit = async (e) => {
    e.preventDefault();
    openModal();
    const text = `Name: ${name}\nPhone: ${phone}\nPersonCount: ${personCount}\nDate: ${date}\nCity:${selectedValue}\nCountry: ${selectedValue2}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
      });
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus("Error sending message.");
    }
    console.log(selectedValue);
    setName("");
    setphone("");
    setDate("");
    setPersonCount("");
    setSelectedValue("");
    setSelectedValue2("");
  };
  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <nav>
            <div className="navbar-logo">
              <a href="">
                <img src="Images/t.png" alt="Rasm kelmadi xatolik bor" />
                <div className="logo-text">
                  <p>ZAMON</p>
                  <span>Busines Travel</span>
                </div>
              </a>
            </div>
            <div ref={navbarItem} className="navbar-items">
              <div className="navbar-menu">
                <div className="nav-links">
                  <ul>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, home)} href="#">
                        {t("home")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, about)} href="#">
                        {t("about")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, tour)} href="#">
                        {t("tour")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, contact)} href="#">
                        {t("contact")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-lang">
                  <ul className="lang">
                    <li onClick={() => changeLanguage("uz")}>Uz</li>
                    <li onClick={() => changeLanguage("en")}>Eng</li>
                    <li onClick={() => changeLanguage("ru")}>Ru</li>
                    <li>
                      <a href="https://t.me/zamonbiznestour">
                        <FontAwesomeIcon
                          className="fa-icon"
                          icon={faTelegram}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/zamontour">
                        <FontAwesomeIcon
                          className="fa-icon"
                          icon={faInstagram}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="menu-logo">
              {!check ? (
                <div className="open-menu" onClick={() => setCheck(!check)}>
                  <img src="Images/menu1.png" alt="" />
                </div>
              ) : (
                <div className="close-menu " onClick={() => setCheck(!check)}>
                  <img src="Images/close.png" alt="" />
                </div>
              )}
            </div>
          </nav>
          {check && (
            <div className="mobile-menus">
              <div className="mobile">
                <div className="nav-links">
                  <ul>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, home)} href="#">
                        {t("home")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, about)} href="#">
                        {t("about")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, tour)} href="#">
                        {t("tour")}
                      </a>
                    </li>
                    <li className="link">
                      <a onClick={(e) => handleClick(e, contact)} href="#">
                        {t("contact")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-lang">
                  <ul className="lang">
                    <li onClick={() => changeLanguage("uz")}>Uz</li>
                    <li onClick={() => changeLanguage("en")}>Eng</li>
                    <li onClick={() => changeLanguage("ru")}>Ru</li>
                    <li>
                      <a href="https://t.me/zamonbiznestour">
                        <FontAwesomeIcon
                          className="fa-icon"
                          icon={faTelegram}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/zamontour">
                        <FontAwesomeIcon
                          className="fa-icon"
                          icon={faInstagram}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <section ref={home} className="main">
        <div className="slides">
          <Slider ref={slides} className="slides-bg" {...settings1}>
            <div className="slide slide1">
              <p className="pi">{t("city-beatufy")}</p>
              <h2>{t("city-name")}</h2>
              <a onClick={(e) => handleClick(e, contact)} href="">
                {t("city-go")}
              </a>
              <div className="city-info">
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol7.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("people")}</p>
                    <h1>56.48M</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol10.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("territory")}</p>
                    <h1>275.400km2</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol9.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("price")}</p>
                    <h1>$646.000</h1>
                  </div>
                </div>
                <div className="box">
                  <a onClick={(e) => handleClick(e, contact)} href="">
                    {t("explore")}...
                  </a>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <p className="pi">{t("city-beatufy")} </p>
              <h2>{t("city-name1")}</h2>
              <a onClick={(e) => handleClick(e, contact)} href="#location">
                {t("city-go")}
              </a>
              <div className="city-info">
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol7.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("people")}</p>
                    <h1>76.45M</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol10.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("territory")}</p>
                    <h1>675.980km2</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol9.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("price")}</p>
                    <h1>$843.000</h1>
                  </div>
                </div>
                <div className="box">
                  <a onClick={(e) => handleClick(e, contact)} href="">
                    {t("explore")}...
                  </a>
                </div>
              </div>
            </div>
            <div className="slide slide3">
              <p className="pi">{t("city-beatufy")} </p>
              <h2>{t("city-name2")}</h2>
              <a onClick={(e) => handleClick(e, contact)} href="">
                {t("city-go")}
              </a>

              <div className="city-info">
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol7.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("people")}</p>
                    <h1>78.87M</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol10.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("territory")}</p>
                    <h1>702.400km2</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol9.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("price")}</p>
                    <h1>$560.000</h1>
                  </div>
                </div>
                <div className="box">
                  <a onClick={(e) => handleClick(e, contact)} href="">
                    {t("explore")}...
                  </a>
                </div>
              </div>
            </div>
            <div className="slide slide4">
              <p className="pi">{t("city-beatufy")} </p>
              <h2>{t("city-name3")}</h2>
              <a onClick={(e) => handleClick(e, contact)} href="">
                {t("city-go")}
              </a>
              <div className="city-info">
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol7.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("people")}</p>
                    <h1>432.48M</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol10.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("territory")}</p>
                    <h1>375.400km2</h1>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="Images/Symbol9.png" alt="" />
                  </div>
                  <div className="text">
                    <p>{t("price")}</p>
                    <h1>$576.000</h1>
                  </div>
                </div>
                <div className="box">
                  <a onClick={(e) => handleClick(e, contact)} href="">
                    {t("explore")}...
                  </a>
                </div>
              </div>
            </div>
          </Slider>
          <div className="lines">
            {btn &&
              btn.map((item, index) => (
                <div
                  key={index}
                  className="line"
                  onClick={() => slides.current.slickGoTo(index)}
                >
                  <span></span>
                  <div className={`div div${item.id}`}></div>
                  <strong>{item.id}</strong>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section ref={tour} className="tour">
        <div className="container">
          <article>
            <h2>{t("offer")}</h2>
            <p>{t("offer-desc")}</p>

            <Slider ref={sliderRef} {...settings} className="carousel">
              {cards &&
                cards.map((item, index) => (
                  <div key={index} className="carousel-card">
                    <div className="carousel-img">
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="carousel-text">
                      <div className="text-top">
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                      </div>
                      <div className="text-detail">
                        <div className="span">
                          <img src="Images/Symbol.png" alt="" />
                          <span>240 {t("check-in")}</span>
                        </div>
                        <span>/ {t("person")}</span>
                      </div>
                      <div className="text-bottom">
                        <h4> {t("deal")}</h4>
                        <ul>
                          <li>
                            <img src="Images/Symbol1.png" alt="" />
                            <span> {t("day-trip")}</span>
                          </li>
                          <li>
                            <img src="Images/Symbol2.png" alt="" />
                            <span> {t("airplane")}</span>
                          </li>
                          <li>
                            <img src="Images/Symbol3.png" alt="" />
                            <span> {t("daily-v")}</span>
                          </li>
                        </ul>
                      </div>
                      <a onClick={(e) => handleClick(e, contact)} href="#">
                        {" "}
                        {t("reserv")}
                      </a>
                    </div>
                  </div>
                ))}
            </Slider>

            <div className="btn-group">
              <div className="prev" onClick={handlePrev}>
                <FontAwesomeIcon className="icon" icon={faArrowLeft} />
              </div>
              <div className="next" onClick={handleNext}>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </div>
            </div>
          </article>
          <article>
            <h2> {t("visa")}</h2>
            <p>{t("visa-desc")}</p>
            <Slider ref={carousel} className="carousel" {...settings}>
              {cards &&
                cards.map((items, index) => (
                  <div key={index} className="carousel-card">
                    <div className="carousel-img">
                      <img src={items.imgUrl} alt="" />
                    </div>
                    <div className="carousel-text">
                      <div className="text-top">
                        <h3>{items.name}</h3>
                      </div>
                      <div className="text-detail">
                        <div className="span">
                          <img src="Images/Symbol.png" alt="" />
                          <span>{t("check-order")}</span>
                        </div>
                      </div>
                      <div className="text-bottom">
                        <h4>{t("deal")}</h4>
                        <ul>
                          <li>
                            <img src="Images/Symbol4.png" alt="" />
                            <span>{t("best-p")}</span>
                          </li>
                          <li>
                            <img src="Images/Symbol5.png" alt="" />
                            <span>{t("short-p")}</span>
                          </li>
                          <li>
                            <img src="Images/Symbol6.png" alt="" />
                            <span>{t("trust-p")}</span>
                          </li>
                        </ul>
                      </div>
                      <a onClick={(e) => handleClick(e, contact)} href="">
                        {t("reserv")}
                      </a>
                    </div>
                  </div>
                ))}
            </Slider>
            <div className="btn-group">
              <div className="prev" onClick={handlePrev1}>
                <FontAwesomeIcon className="icon" icon={faArrowLeft} />
              </div>
              <div className="next" onClick={handleNext1}>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section ref={about} className="about">
        <div className="container">
          <div className="destenation">
            <h2>{t("explore-des")}</h2>
            <p>{t("explore-desc")}</p>
            <div className="cards">
              <div className="card">
                <div className="card-image">
                  <img src="Images/afr.png" alt="Rasm kelmadi" />
                </div>
                <div className="card-text">
                  <div className="text">
                    <div className="text-item">
                      <h3>{t("railway-t")}</h3>
                      <p>{t("railway-w")}</p>
                    </div>
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                  <p>{t("railway-desc")}</p>
                  <div className="hide-link">
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img src="Images/airplane.png" alt="Rasm kelmadi" />
                </div>
                <div className="card-text">
                  <div className="text">
                    <div className="text-item">
                      <h3>{t("air-t")}</h3>
                      <p>{t("air-g")}</p>
                    </div>
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                  <p>{t("air-desc")}</p>
                  <div className="hide-link">
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="countries">
            <h2>{t("v-country")}</h2>
            <p className="pi">{t("v-country-d")}</p>
            <div className="boxes">
              <div className="box">
                <div className="box-image">
                  <img src="Images/dubai2.png" alt="Rasm kelmadi" />
                </div>
                <div className="box-text">
                  <div className="text">
                    <div className="text-item">
                      <h3>Dubai</h3>
                      <p>Birlashgan Arab Amirliklari</p>
                    </div>
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                  <p className="pip">{t("v-dubai")}</p>
                  <div className="box-lines">
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolA.png" alt="" />
                      </div>
                      <p>44.41{t("mln")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolB.png" alt="" />
                      </div>
                      <p>432.41{t("km2")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolC.png" alt="" />
                      </div>
                      <p>$676</p>
                    </div>
                  </div>
                  <div className="lines-link">
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("v-need")}
                      <FontAwesomeIcon
                        className="icon-link"
                        icon={faArrowRight}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-image">
                  <img src="Images/country.png" alt="Rasm kelmadi" />
                </div>
                <div className="box-text">
                  <div className="text">
                    <div className="text-item">
                      <h3>Antalya</h3>
                      <p>Turkiya</p>
                    </div>
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                  <p className="pip">{t("v-desc-a")}</p>
                  <div className="box-lines">
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolA.png" alt="" />
                      </div>
                      <p>56.67{t("mln")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolB.png" alt="" />
                      </div>
                      <p>448.56{t("km2")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolC.png" alt="" />
                      </div>
                      <p>$350.765</p>
                    </div>
                  </div>
                  <div className="lines-link">
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("v-need")}
                      <FontAwesomeIcon
                        className="icon-link"
                        icon={faArrowRight}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-image">
                  <img src="Images/sharm2.png" alt="Rasm kelmadi" />
                </div>
                <div className="box-text">
                  <div className="text">
                    <div className="text-item">
                      <h3>Sharm El-Sheikh</h3>
                      <p>Misr</p>
                    </div>
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("explore")}
                    </a>
                  </div>
                  <p className="pip">{t("v-desc-eg")}</p>
                  <div className="box-lines">
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolA.png" alt="" />
                      </div>
                      <p>73.65{t("mln")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolB.png" alt="" />
                      </div>
                      <p>479.654{t("km2")}</p>
                    </div>
                    <div className="box-line">
                      <div className="img">
                        <img src="Images/SymbolC.png" alt="" />
                      </div>
                      <p>$765.876</p>
                    </div>
                  </div>
                  <div className="lines-link">
                    <a onClick={(e) => handleClick(e, contact)} href="">
                      {t("v-need")}
                      <FontAwesomeIcon
                        className="icon-link"
                        icon={faArrowRight}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="best-location">
            <h2>{t("b-location")}</h2>
            <p>{t("b-loc-desc")}</p>
            <div className="gallery">
              {images &&
                images.map((item, index) => (
                  <div
                    onClick={() => handleClick1(index)}
                    key={index}
                    className={`image-container ${
                      expandedImage === index ? "expanded" : ""
                    }`}
                  >
                    <img src={item.imgUrl} alt="Error" />
                    <div className="div">
                      <p>{item.name}</p>
                      <span>
                        {item.peop}
                        {t("mln")}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={contact} className="contact">
        <div className="contact-info">
          <div className="container">
            <p className="pi">{t("book-prefer")}</p>
            <span></span>
            <h2>{t("m-form-h2")}</h2>
            <a href="">{t("explore")}</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src="Images/SymbolD.png" alt="" />
              </div>
              <h3>{t("y-phone")}</h3>
              <p>+998945142401</p>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/SymbolF.png" alt="" />
              </div>
              <h3>{t("contact_via_email")}</h3>
              <p>zamonbiznestour@gmail.com</p>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/SymbolE.png" alt="" />
              </div>
              <h3>{t("visit_our_office")}</h3>
              <p>15/25, Chilonzor-9 Tashkent city</p>
            </div>
          </div>
        </div>
        <div className="map-form">
          <div className="container">
            <div className="for-map">
              <div className="map-x">
                 <Map/>
              </div>
              <div className="form">
                <h2>
                  {t("reserve_")} <span>{t("your")} </span>
                  {t("spot")} <span>{t("sp")}</span>
                </h2>
                <form onSubmit={handleSubmit} className="form-container">
                  <div className="input-group">
                    <div className="input-item">
                      <label htmlFor="input1">{t("y-name")}:</label>
                      <input
                        placeholder="Johnson"
                        type="text"
                        id="input1"
                        name="input1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="input2">{t("y-phone")}:</label>
                      <input
                        required
                        placeholder="+998945142401"
                        type="number"
                        id="input2"
                        name="input2"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-item">
                      <label htmlFor="select1">{t("guest")}</label>
                      <select
                        value={personCount}
                        onChange={(e) =>
                          setPersonCount(
                            e.target.selectedOptions[0].textContent
                          )
                        }
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="input-item">
                      <label htmlFor="input4">{t("check-date")}</label>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        id="input4"
                        name="input4"
                      />
                    </div>
                  </div>
                  <div className="input-group single-item">
                    <div className="input-item">
                      <label htmlFor="select1">{t("y-destination")}</label>
                      <select
                        value={selectedValue}
                        onChange={(e) =>
                          setSelectedValue(
                            e.target.selectedOptions[0].textContent
                          )
                        }
                        id="select1"
                        name="select1"
                      >
                        <option>{t("coutry-f")}</option>
                        <option>Sidney</option>
                        <option>Madrid</option>
                        <option>Gong-Kong</option>
                        <option>Seoul</option>
                        <option>Warshava</option>
                        <option>London</option>
                        <option>New-York</option>
                        <option>Ar-Riyod</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group single-item">
                    <div className="input-item">
                      <label htmlFor="select2">{t("y-visa")}</label>
                      <select
                        required
                        value={selectedValue2}
                        onChange={(e) =>
                          setSelectedValue2(
                            e.target.selectedOptions[0].textContent
                          )
                        }
                      >
                        <option value="option1">{t("coutry-f")}</option>
                        <option>Yevropa</option>
                        <option>England</option>
                        <option>Japan</option>
                        <option>Dubai</option>
                        <option>China</option>
                        <option>Germany</option>
                        <option>Seoul</option>
                        <option>Istanbul</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit">{t("make-reserv")}</button>
                </form>
                <Modal
                  visible={isVisible}
                  
                  
                  height="300"
                  effect="fadeInUp"
                  onClickAway={closeModal}
                >
                  <div>
                    <p className="modal-p">Forma jo'natildi tez orada siz bilan aloqaga chiqamiz</p>
                    <button className="modal-button" onClick={closeModal}>Close</button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="content">
            <div className="left-content">
              <h2>{t("do_you_want_to_travel")} </h2>
              <p>{t("contact_us_right_now")} </p>
            </div>
            <div className="right-content">
              <a onClick={(e) => handleClick(e, contact)} href="#">
                {t("explore")}
              </a>
            </div>
          </div>
        </div>
        <div className="pi">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
