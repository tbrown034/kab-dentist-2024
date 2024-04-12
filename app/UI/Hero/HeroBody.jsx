import sectionContents from "../../../sectionContent.json";

const HeroText = () => {
  const { textBlock } = sectionContents.heroText;
  return (
    <h3 className="flex flex-col justify-center gap-2 text-xl md:gap-8 lg:gap-12">
      {textBlock.map((block, index) => (
        <p key={index} className="flex flex-col gap-2 lg:text-lg">
          {block.text}
        </p>
      ))}
    </h3>
  );
};

export default HeroText;
