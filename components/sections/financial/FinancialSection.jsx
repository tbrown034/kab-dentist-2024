import FullTitle from "@/components/shared/FullTitle";
import FinancialPills from "./FinancialPills";
import FinancialFAQs from "./FinancialFAQs";
import Medicaid from "@/components/shared/Medicaid";

const FinancialSection = () => {
  const title = "Making World-Class Dental Care Accessible to All";
  const highlightedText = "Making World-Class";
  const highlightInFront = true;

  return (
    <section className="flex flex-col gap-4" id="financialSection">
      <h2
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          We prioritize affordable, accessible dental care. Our clinic works
          with many insurance providers and offers flexible financing options
          with low monthly payments.
        </p>
        <p>
          Don't have insurance or facing coverage gaps? Our financial services
          support includes plans with no or low interest and minimal monthly
          payments.
        </p>
      </div>
      <FinancialPills />
      <FinancialFAQs />
      <Medicaid />
    </section>
  );
};

export default FinancialSection;
