

import Image from 'next/image';
import image1 from '../../public/uygundur.png';
import image2 from '../../public/uygun deyil.png';
import image3 from '../../public/Layer_1 (1).png';
import image4 from '../../public/Layer_1 (2).png';

export default function StepSection() {
  return (
    <section className=" mb-12">
      <h3 className="text-center text-[48px] font-[700] mb-[122px]">
        Fəaliyyət kartları necə işləyir?
      </h3>

      <div className="max-w-[1016px] mx-auto">
        {/* 1st Step */}
        <div className="flex items-start justify-between w-full relative step-container mb-[200px]">
          <div className="flex items-center gap-12 w-[350px]">
            <div className="flex flex-col items-center gap-2">
              <Image src={image1} alt="img" />
              <span
                className="rounded-[10px] px-[16px] py-[6px] text-white"
                style={{ background: '#13B992' }}
              >
                Uyğundur
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src={image2} alt="img" />
              <span
                className="rounded-[10px] px-[16px] py-[6px] text-white"
                style={{ background: '#FF006E' }}
              >
                Uyğun deyil
              </span>
            </div>
          </div>

          <div className="step-number">1</div>
          <div className="w-[350px]">
            <h6 className="text-[32px] font-[700]">Seçim et</h6>
            <p className="text-[20px] text-textFourth">
              Sizə təqdim olunan 32 kartı oxuyaraq müvafiq olaraq  “Uyğundur” və
              ya “Uyğun deyil” düyməsinə klikləyin
            </p>
          </div>
        </div>

        {/* 2nd Step */}
        <div className="flex items-start justify-between w-full relative step-container mb-[200px]">
          <div className="w-[350px]">
            <h6 className="text-[32px] font-[700] text-right">Təstiq et</h6>
            <p className="text-[20px] text-right  text-textFourth">
              Növbəti mərhələdə "Uyğundur" olaraq seçdiyiniz bütün kartlar ümumi
              olaraq sizə təqdim olunacaqdır. Bu kartlar içərisindən sizin üçün
              ən maraqlı 3 kartı seçərək testi tamamlayın.
            </p>
          </div>
          <div className="step-number">2</div>
          <div className="flex items-center gap-12 w-[350px]">
            <div className="flex flex-col items-center gap-2">
              <Image src={image3} alt="img" />
            </div>
          </div>
        </div>

        {/* 3rd Step */}
        <div className="flex items-start justify-between w-full relative step-container mb-[200px]">
          <div className="flex items-center gap-12 w-[350px]">
            <div className="flex flex-col items-center gap-2">
              <Image src={image1} alt="img" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src={image2} alt="img" />
            </div>
          </div>
          <div className="step-number">3</div>
          <div className="w-[350px]">
            <h6 className="text-[32px] font-[700]">Nəticəni gör</h6>
            <p className="text-[20px]  text-textFourth">
              Testin nəticəsində seçdiyiniz hər 3 variant üzrə sizə ümumi
              məlumat və uyğun ola biləcək peşələrin siyahısı təqdim
              olunacaqdır.
            </p>
          </div>
        </div>

        {/* 4th Step */}
        <div className="flex items-start justify-between w-full relative step-container mb-[122px]">
          <div className="w-[350px]">
            <h6 className="text-[32px] font-[700] text-right">Yadda saxla</h6>
            <p className="text-[20px] text-right  text-textFourth">
              Testin nəticəsinin sizə uyğunluğunu karyera məsləhətçisi və ya
              müəlliminizlə müzakirə edə, eləcə də nəticəni paylaşa, şəkil
              olaraq yükləyə və ya imeyl ünvanınıza yönləndirə bilərsiniz.
            </p>
          </div>
          <div className="step-number">4</div>
          <div className="flex items-center gap-12 w-[350px]">
            <div className="flex flex-col items-center gap-2">
              <Image src={image4} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
