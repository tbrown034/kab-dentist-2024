import Image from "next/image";
import retainer from "../../../public/images/stock/retainer.jpg";
import teeth2 from "../../../public/images/stock/teeth2.jpg";
import toothbrushes from "../../../public/images/stock/toothbrushes.jpg";
import womanSmiling from "../../../public/images/stock/womanSmiling.jpg"; // Assuming this is corrected and unique from `retainer`.

const financialImages = [
  {
    src: retainer,
    alt: "A dental retainer",
  },
  {
    src: teeth2,
    alt: "More teeth models showcasing dental issues",
  },
  {
    src: toothbrushes,
    alt: "Assortment of toothbrushes",
  },
  {
    src: womanSmiling,
    alt: "Woman smiling, showcasing dental work",
  },
];

const FinancialImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {financialImages.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-xl">
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default FinancialImgGroup;
