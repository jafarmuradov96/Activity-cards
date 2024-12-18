






// import { getCardData } from "@/services/getCardData";
// import Head from "next/head";
// import React, { useEffect, useState } from "react";
// import axios from "axios";



// const SelectedCards = () => {
//   // const cards = res?.card;
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [cards, setCards] = useState([]);


//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getCardData();
//         setCards(res?.card);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleCardSelect = (card) => {
//     if (selectedCards.includes(card)) {
//       setSelectedCards((prev) => prev.filter((c) => c !== card));
//     } else if (selectedCards.length < 3) {
//       setSelectedCards((prev) => [...prev, card]);
//     }
//   };

//   const handleConfirm = async () => {
//     if (selectedCards.length > 0) {
//       try {
//         const response = await axios.post("/api/confirm-cards", {
//           selectedCards,
//         });
//         console.log("Server cavabı:", response.data);
//       } catch (error) {
//         console.error("Sorğu zamanı xəta:", error);
//       }
//     } else {
//       alert("Ən az bir kart seçməlisiniz!");
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Seçilmiş kartlar</title>
//       </Head>
//       <div className="max-w-[1225px] mx-auto mt-[81px] flex flex-col items-center justify-center">
//         <h3 className="text-center text-[24px] font-[700] text-textFourth">
//           İndi isə, ən uyğun olan 3 kartı seçin
//         </h3>
//         <div className="flex items-center gap-[24px] justify-center flex-wrap mt-[40px]">
//           {cards?.slice(0, 5)?.map((card, index) => (
//             <div
//               key={index}
//               onClick={() => handleCardSelect(card)}
//               className={`cursor-pointer flex flex-col items-center justify-center gap-[50px] w-[392px] h-[526px] ${
//                 selectedCards.includes(card)
//                   ? "border-2 border-blue-500 rounded-[20px]"
//                   : " border border-borderColor bg-white rounded-[20px]"
//               }`}
//             >
//               <img src={card?.image} alt="img" />
//               <h2 className="text-center text-[32px] font-[700]">
//                 {card?.title}
//               </h2>
//               <p className="text-center text-textSecondary">
//                 {card?.short_desc}
//               </p>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleConfirm}
//           className="flex items-center justify-center gap-[10px] mt-[40px] mb-[100px] bg-buttonThird text-white py-[14px] px-[18px] rounded-[8px] hover:bg-emerald-400"
//         >
//           <span>Təsdiq et</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             viewBox="0 0 28 28"
//             fill="none"
//           >
//             <path
//               d="M18.6667 4.59144C17.2609 3.89282 15.6763 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 13.6057 24.4783 13.2164 24.4359 12.8333M24.5 5.83333L14 16.3333L10.5 12.8333"
//               stroke="#E8FDF8"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </>
//   );
// };

// export default SelectedCards;


'use client';

import { getCardData } from "@/services/getCardData";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectedCards = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCardData();
        setCards(res?.card);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  const handleCardSelect = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards((prev) => prev.filter((c) => c !== card));
    } else if (selectedCards.length < 3) {
      setSelectedCards((prev) => [...prev, card]);
    }
  };

  const handleConfirm = async () => {
    if (selectedCards.length > 0) {
      try {
        const response = await axios.post("/api/confirm-cards", {
          selectedCards,
        });
        console.log("Server cavabı:", response.data);
      } catch (error) {
        console.error("Sorğu zamanı xəta:", error);
      }
    } else {
      alert("Ən az bir kart seçməlisiniz!");
    }
  };

  console.log(cards, 'selecetedd');
  
  

  return (
    <>
      <Head>
        <title>Seçilmiş kartlar</title>
      </Head>
      <div className="max-w-[1225px] mx-auto mt-[81px] flex flex-col items-center justify-center">
        <h3 className="text-center text-[24px] font-[700] text-textFourth">
          İndi isə, ən uyğun olan 3 kartı seçin
        </h3>
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <span>Loading...</span> {/* You can replace this with a spinner */}
          </div>
        ) : (
          <div className="flex items-center gap-[24px] justify-center flex-wrap mt-[40px]">
            {cards?.slice(0, 5)?.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardSelect(card)}
                className={`cursor-pointer flex flex-col items-center justify-center gap-[50px] w-[392px] h-[526px] ${
                  selectedCards.includes(card)
                    ? "border-2 border-blue-500 rounded-[20px]"
                    : " border border-borderColor bg-white rounded-[20px]"
                }`}
              >
                <img src={card?.image} alt="img" />
                <h2 className="text-center text-[32px] font-[700]">
                  {card?.title}
                </h2>
                <p className="text-center text-textSecondary">
                  {card?.short_desc}
                </p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handleConfirm}
          className="flex items-center justify-center gap-[10px] mt-[40px] mb-[100px] bg-buttonThird text-white py-[14px] px-[18px] rounded-[8px] hover:bg-emerald-400"
        >
          <span>Təsdiq et</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M18.6667 4.59144C17.2609 3.89282 15.6763 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 13.6057 24.4783 13.2164 24.4359 12.8333M24.5 5.83333L14 16.3333L10.5 12.8333"
              stroke="#E8FDF8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SelectedCards;
