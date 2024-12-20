

'use client';

import Head from "next/head";
import Hero from "@/components/sections/Hero";
import { getHero } from "@/services/getHero";
import { getCardData } from "@/services/getCardData";
import Image from "next/image";
import imageFirst from "../public/Group4.png";
import imageSecond from "../public/Group6.png";
import imageThird from "../public/Ellipse57.png";
import StepSection from "@/components/sections/StepSection";
import Link from "next/link";
import Button from "@/components/element/Button";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";


export async function getServerSideProps() {
  try {
    const hero = await getHero();
    const card = await getCardData();
    return { props: { hero, card } };
  } catch (error) {
    console.error("SSR Error:", error);
    return { props: { hero: [], card: [] } };
  }
}


export default function Home( { hero, card } ) {
  // const [heroData, setHeroData] = useState([]);
  // const [cardData, setCardData] = useState([]);
  // const [loading, setLoading] = useState(false); 

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true); // Start loading
  //       const [hero, card] = await Promise.all([getHero(), getCardData()]);
  //       setHeroData(hero?.slider || []);
  //       setCardData(card?.card || []);
  //     } catch (error) {
  //       console.error("Failed to fetch data", error);
  //     } finally {
  //       setLoading(false); // Stop loading
  //     }
  //   };

  //   fetchData();
  // }, []);

  const cardData = card?.card || [];
  const heroData = hero?.slider || [];

  console.log("cardData", cardData);
  console.log("heroData", heroData);
  
  
  return (
    <>
      <Head>
        <title>Fəaliyyət kartları</title>
      </Head>
      <>
        <Header />
        
       
        {/* ( */}
          <>
            <Hero dataHero={heroData} dataCard={cardData} />

            <div className="bg-bgSecondary h-[486px] flex items-center justify-center mt-[94px]">
              <div className="max-w-[1224px] mx-auto flex items-center justify-between w-full">
                <h5 className="text-[48px] font-[700] text-textThird w-[35%]">
                  Alət kimlər üçün nəzərdə tutulub?
                </h5>
                <div className="w-[57%] flex items-center justify-between">
                  <div className="flex flex-col items-center justify-center bg-white rounded-[40px] w-[320px] h-[200px]">
                    <div className="relative">
                      <Image src={imageThird} alt="img" />
                      <div className="absolute top-0 left-[4px]">
                        <Image src={imageSecond} alt="img" />
                      </div>
                    </div>
                    <span className="text-[32px]">Tələbə</span>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-white rounded-[40px] w-[320px] h-[200px]">
                    <div className="relative">
                      <Image src={imageThird} alt="img" />
                      <div className="absolute top-0 left-[-8px]">
                        <Image src={imageFirst} alt="img" />
                      </div>
                    </div>
                    <span className="text-[32px]">Şagird</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="rules" className="h-[194px]">
            </div>
            <StepSection />
            <Link href="/test">
              <div className="flex items-center justify-center mb-[100px]">
                <Button className="w-[208px] h-[56px] text-[20px]">
                  Testə başla
                </Button>
              </div>
            </Link>
          </>
        {/* )} */}
      </>
    </>
  );
}
