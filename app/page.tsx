import { HomeFAQ } from "@/components/HomeFAQ";
import ParallaxProject from "@/components/ParallaxProject";
// features should be an array of objects with id, question, answer, Icon, and alt properties

export default function Home() {
  return (
    <>
      <ParallaxProject />
      <HomeFAQ />
    </>
  );
}
