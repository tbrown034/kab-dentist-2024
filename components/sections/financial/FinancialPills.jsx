import Image from "next/image";
import careCredit from "../../../src/assets/images/logos/careCredit.png";

const FinancialPills = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row ">
      <div className="flex flex-col justify-center gap-4 p-4 text-black bg-white border-2 border-teal-800 shadow rounded-xl">
        <Image src={careCredit} alt="care credit"></Image>
        <p>
          CareCredit is a health and wellness credit card with flexible
          financing options so you can pay over time.
        </p>
        <div>
          <a
            href="https://www.carecredit.com/apply/?utm_source=SA360&utm_medium=paidsearch&utm_campaign=SR_HW_CCD2C_G-BR-LF-General-Restructure_AQ_EVG_EVG&utm_content=carecredit&sitecode=HDLSGOIGBN&gclid=CjwKCAjwh4-wBhB3EiwAeJsppOye5SB9z7UueuvmYXPtn6JWiZCz0k-g9Oif8uVS32Hv_NE631T2xBoCYLIQAvD_BwE&gclsrc=aw.ds"
            className="p-2 px-6 text-white bg-teal-600 rounded-lg shadow hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinancialPills;
