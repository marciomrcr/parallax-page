import OverlayContent from "./OverlayContent";
import StickyImage from "./StickyImage";

type Props = {
  imgUrl: string;
  heading: string;
  subHeading: string;
  children: React.ReactNode;
};

export default function ParallaxContent({
  imgUrl,
  heading,
  subHeading,
  children,
}: Props) {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayContent heading={heading} subHeading={subHeading} />
      </div>
      {children}
    </div>
  );
}
