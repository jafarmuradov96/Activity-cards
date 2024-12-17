// import Header from "@/components/layout/header";
// import { getCardData } from "@/services/getCardData";
// import Head from "next/head";
// import React, { useEffect, useState } from "react";


// const ResultPage = () => {
//   // const card = res?.card;

//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getCardData();
//         setCards(res?.card.slice(0, 10)); 
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);


//   return (
//     <>
//       <Head>
//         <title>Testin nəticəsi</title>
//       </Head>
//       <Header />
//       <div className="bg-bgSecondary">
//         <div className="max-w-[1224px] mx-auto pt-[180px] bg-bgSecondary ">
//           <h3 className="text-[36px] font-[700] text-center mb-[84px]">
//             Testin nəticəsi
//           </h3>
//         </div>

//         {cards &&
//           cards?.map((card, index) => (
//             <div
//               key={index}
//               className=" max-w-[1224px] mx-auto height-auto rounded-[16px] bg-white py-[60px] px-[44px] mb-[84px]"
//             >
//               <div className="flex items-center gap-[38px]">
//                 <img src={card?.image} alt="img" />
//                 <h3 className="text-[36px] font-[700] ">{card?.title}</h3>
//               </div>
//               <div>
//                 <div
//                   className={`mt-[44px] text-textSecondary text-[20px] result-text `}
//                   dangerouslySetInnerHTML={{ __html: card?.desc }}
//                 />
//               </div>

//               <div>
//                 <h3 className="text-[24px] font-[700] mt-[46px]">Uyğun peşələr</h3>
//                 <div className="work-list" dangerouslySetInnerHTML={{ __html: card?.work }} />


//               </div>




//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default ResultPage;



import Header from "@/components/layout/header";
import { getCardData } from "@/services/getCardData";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const ResultPage = () => {
  const [cards, setCards] = useState([]); // State for fetched cards
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // Start loading
        const res = await getCardData();
        setCards(res?.card.slice(0, 10)); // Set fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Testin nəticəsi</title>
      </Head>
      <Header />
      <div className="bg-bgSecondary">
        <div className="max-w-[1224px] mx-auto pt-[180px] bg-bgSecondary">
          <h3 className="text-[36px] font-[700] text-center mb-[84px]">
            Testin nəticəsi
          </h3>
        </div>

        {loading ? (
          // Loading spinner or text
          <div className="flex justify-center items-center py-[100px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            <p className="ml-4 text-[20px] font-medium">Yüklənir...</p>
          </div>
        ) : (
          // Display cards once data is loaded
          cards?.map((card, index) => (
            <div
              key={index}
              className="max-w-[1224px] mx-auto rounded-[16px] bg-white py-[60px] px-[44px] mb-[84px]"
            >
              <div className="flex items-center gap-[38px]">
                <img src={card?.image} alt="img" />
                <h3 className="text-[36px] font-[700]">{card?.title}</h3>
              </div>
              <div>
                <div
                  className="mt-[44px] text-textSecondary text-[20px] result-text"
                  dangerouslySetInnerHTML={{ __html: card?.desc }}
                />
              </div>

              <div>
                <h3 className="text-[24px] font-[700] mt-[46px]">Uyğun peşələr</h3>
                <div
                  className="work-list"
                  dangerouslySetInnerHTML={{ __html: card?.work }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ResultPage;
