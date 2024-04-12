import sectionContents from "../../../sectionContent.json";

const HeroText = () => {
  const { textBlock } = sectionContents.heroText;
  return (
    <h3 className="flex flex-col justify-center gap-2 text-xl lg:text-2xl xl:text-3xl xl:gap-16 md:gap-8 lg:gap-12">
      {textBlock.map((block, index) => (
        <p key={index} className="flex flex-col gap-2 ">
          {block.text}
        </p>
      ))}
    </h3>
  );
};

export default HeroText;
