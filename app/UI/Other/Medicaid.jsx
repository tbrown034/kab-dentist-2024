import React from "react";

const Medicaid = () => {
  return (
    <div>
      <p className="px-4 text-sm ">
        <b>* Note:</b> We currently are{" "}
        <span className="italic font-semibold">not accepting Medicaid.</span>{" "}
        However, there are many{" "}
        <a className="underline" href="/">
          affordable financial options{" "}
        </a>
        we can help guide you through!
      </p>
    </div>
  );
};

export default Medicaid;
