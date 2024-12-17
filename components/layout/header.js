import React from "react";
import Button from "../element/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        boxShadow: "0px 12px 72.9px 0px rgba(47, 133, 237, 0.07)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#fff",
      }}
    >
      <div className="max-w-[1224px] mx-auto flex justify-between items-center py-[30px]">
        <Link href="/">
        <h3 className="text-4xl font-bold text-logoPrimary">Fəaliyyət kartları</h3>
        </Link>
        <nav>
          <ul className="flex gap-[40px] text-[20px]" style={{ color: '#4C4C4C'}}>
            <li><a href="#rules">Qaydalar</a></li>
            <li>Ətraflı məlumat</li>
            <li>Əlaqə</li>
          </ul>
        </nav>
        <Link href="/test">
          <Button className="w-[208px] h-[56px] text-[20px]">Testə başla</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
