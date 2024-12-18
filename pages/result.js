import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const selectedCards = useSelector((state) => state.cards.selectedCards);

  console.log("selectedCards", selectedCards);


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


          {selectedCards?.map((card, index) => (
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
                <h3 className="text-[24px] font-[700] mt-[46px]">
                  Uyğun peşələr
                </h3>
                <div
                  className="work-list"
                  dangerouslySetInnerHTML={{ __html: card?.work }}
                />
              </div>

              <div className="flex items-center gap-[27px] mt-[46px]">
                <Link
                  href="/test"
                  className="flex items-center justify-center gap-[10px] py-[14px] px-[18px] rounded-[8px] text-white "
                  style={{ backgroundColor: "#2f85ed" }}
                >
                  <span>Paylaş</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M17.4999 7L13.9999 3.5M13.9999 3.5L10.4999 7M13.9999 3.5V17.5M18.6666 11.6667H20.1666C21.2712 11.6667 22.1666 12.5621 22.1666 13.6667V21.3333C22.1666 22.4379 21.2712 23.3333 20.1666 23.3333H7.83325C6.72868 23.3333 5.83325 22.4379 5.83325 21.3333V13.6667C5.83325 12.5621 6.72868 11.6667 7.83325 11.6667H9.33325"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/test"
                  className="flex items-center justify-center gap-[10px] py-[14px] px-[18px] rounded-[8px] "
                  style={{border: "1px solid #2f85ed", color: "#2f85ed"}}
                >
                  <span>Endir</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M18.6667 12.8333L14 17.5M14 17.5L9.33333 12.8333M14 17.5V3.5M24.5 17.5V20.1667C24.5 21.2712 23.6046 22.1667 22.5 22.1667H5.5C4.39543 22.1667 3.5 21.2712 3.5 20.1667V17.5"
                      stroke="#2F85ED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/test"
                  className="flex items-center justify-center gap-[10px] py-[14px] px-[18px] rounded-[8px] "
                  style={{border: "1px solid #2f85ed", color: "#2f85ed"}}
                >
                  <span>E-poçta göndər</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M12.8333 22.1668H5.5C4.39543 22.1668 3.5 21.2714 3.5 20.1668V7.8335C3.5 6.72893 4.39543 5.8335 5.5 5.8335H22.5C23.6046 5.8335 24.5 6.72893 24.5 7.8335V15.1668M25.6667 22.1668H17.5M25.6667 22.1668L23.3333 19.8335M25.6667 22.1668L23.3333 24.5002M3.5 9.3335L12.7057 15.4706C13.4895 15.9931 14.5105 15.9931 15.2943 15.4706L24.5 9.3335"
                      stroke="#2F85ED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ResultPage;
