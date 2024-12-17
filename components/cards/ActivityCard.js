import React from "react";

const ActivityCard = ({ dataCard }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] w-[392px] h-[526px] rounded-[20px] border border-borderColor bg-white ">
      <img src={dataCard?.image} alt="img" />
      <h2 className="text-center text-[32px] font-[700]">{dataCard?.title}</h2>
      <p className="text-center text-textSecondary">{dataCard?.short_desc}</p>
    </div>
  );
};

export default ActivityCard;
