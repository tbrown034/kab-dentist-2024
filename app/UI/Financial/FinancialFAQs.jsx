import React from "react";

const FinancialFAQs = () => {
  return (
    <section>
      <div className="p-4">
        <h2 className="mb-8 text-xl font-extrabold tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="pt-4 text-left border-t border-gray-200">
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <i className="mr-2 fa-solid fa-credit-card fa-fw"></i>
              What payment options do you offer?
            </h3>
            <p>
              We accept all major credit cards, insurance plans, and payment
              programs. We also offer financing options to make dental care more
              accessible.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <i className="mr-2 fa-solid fa-file-invoice-dollar fa-fw"></i>
              Do you offer payment plans?
            </h3>
            <p>
              Yes, we provide flexible payment plans for various treatments. Our
              goal is to make dental care affordable for all our patients.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <i className="mr-2 fa-solid fa-briefcase-medical fa-fw"></i>
              How does insurance billing work?
            </h3>
            <p>
              We direct bill your insurance company when possible, handling the
              paperwork to ensure you receive the benefits you're entitled to.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <i className="mr-2 fa-solid fa-eye fa-fw"></i>
              Are there any hidden fees?
            </h3>
            <p>
              Transparency is key in our billing process. We provide detailed
              estimates before any treatment and discuss all possible costs with
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialFAQs;
