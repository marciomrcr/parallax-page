import ContentCard from "./ContentCard";
import ParallaxContent from "./ParallaxContent";

export default function ParallaxProject() {
  return (
    <div className="bg-white border-2 ">
      <ParallaxContent
        imgUrl="/image1.jpg"
        heading="Quality"
        subHeading="Product Delivered"
      >
        <ContentCard />
      </ParallaxContent>
    </div>
  );
}
