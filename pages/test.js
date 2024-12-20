"use client";

import React, { useEffect, useState } from "react";
import ActivityCard from "@/components/cards/ActivityCard";
import { getCardData } from "@/services/getCardData";
import Head from "next/head";
import suitable from "../public/uygundur.png";
import notSuitable from "../public/uygun deyil.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addNotSuitableCard, addSuitableCard } from "@/redux/CardSlice";
import { useRouter } from "next/navigation";

const TestSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);

  const router = useRouter()

  const suitableCards = useSelector((state) => state.cards.suitableCards);
  const notSuitableCards = useSelector((state) => state.cards.notSuitableCards);


  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getCardData();
        setCards(res?.card || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);  
      }
    }
    fetchData();
  }, []);

  const nextSlide = () => {
    if(currentSlide === cards.length - 1) {
      router.push('/selected-cards')
    };
    setCurrentSlide((prev) => (prev + 1) % cards.length);

    if(count > 0) {
    setCount((prev) => prev - 1);
    }
  };
  

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);

    setCount((prev) => prev + 1);
  };


  const handleSuitable = (card) => {
    if (notSuitableCards.some((c) => c.title === card.title)) {

      console.log();
      
      dispatch(addNotSuitableCard(notSuitableCards.filter((c) => c.title !== card.title)));
    }
    if (!suitableCards.some((c) => c.title === card.title)) {
      dispatch(addSuitableCard([...suitableCards, card]));
    }
    nextSlide();
  };
  
  const handleNotSuitable = (card) => {
    
    if (suitableCards.some((c) => c.title === card.title)) {
      dispatch(addSuitableCard(suitableCards.filter((c) => c.title !== card.title)));
    }
    if (!notSuitableCards.some((c) => c.title === card.title)) {
      dispatch(addNotSuitableCard([...notSuitableCards, card]));
    }
    nextSlide();
  };
  

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className="flex items-center justify-center gap-[10px] mt-[70px]">
        {Array.from({ length: cards?.length }, (_, index) => (
          <span
            key={index}
            className={`w-[28px] h-[8px] rounded-[27px] ${
              index <= currentSlide ? "bg-logoPrimary" : "bg-bgSecondary"
            }`}
          ></span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        {loading ? ( 
          <div className="text-[24px] font-bold text-gray-600">Loading...</div>
        ) : (
          <>
            <h3 className="text-[24px] font-[700] text-textFourth mb-[24px]">
              Kartın uyğunluğunu aşağıda qeyd et
            </h3>
            <div className="flex items-center gap-[48px]">
              <button
                onClick={prevSlide}
                className={
                  currentSlide === 0
                    ? "opacity-60 bg-bgSecondary hover:bg-gray-100 py-[14px] px-[18px] rounded-full"
                    : "bg-bgSecondary hover:bg-gray-100 py-[14px] px-[18px] rounded-full"
                }
                disabled={currentSlide === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M9.33333 19.8333L3.5 14M3.5 14L9.33333 8.16663M3.5 14H24.5"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center text-center">
                <ActivityCard dataCard={cards[currentSlide]} />
              </div>
              <button
                onClick={nextSlide}
                className={
                  // currentSlide === cards.length - 1
                  count === 0
                    ? "opacity-60 bg-bgSecondary hover:bg-gray-100 py-[14px] px-[18px] rounded-full "
                    : "bg-bgSecondary hover:bg-gray-100 py-[14px] px-[18px] rounded-full"
                }
                // disabled={currentSlide === cards.length - 1}
                disabled={count === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M18.6667 8.16663L24.5 14M24.5 14L18.6667 19.8333M24.5 14H3.5"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center gap-[60px] mt-[36px]">
              <button
                className="text-green-500 text-center hover:opacity-90"
                onClick={() => handleSuitable(cards[currentSlide])}
              >
                <Image src={suitable} alt="img" />
                <p className="mt-[12px]">Uyğundur</p>
              </button>
              <button
                className="text-pink-500 text-center hover:opacity-90"
                onClick={() => handleNotSuitable(cards[currentSlide])}
              >
                <Image src={notSuitable} alt="img" />
                <p className="mt-[12px]">Uyğun deyil</p>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TestSlider;






