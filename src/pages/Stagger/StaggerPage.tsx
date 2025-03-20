import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SmallBox } from "../../components";

function StaggerPage() {
  const main = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to(".box", {
        scale: 2,
        repeat: -1,
        y: 400,
        yoyo: true,
        stagger: {
          amount: 5,
          from: "random",
        },
      });
    },
    { scope: main }
  );
  return (
    <div className="w-full flex-wrap gap-y-2 flex gap-x-4 p-4" ref={main}>
      {[...Array(100).keys()].map((i) => (
        <SmallBox key={i + 1} />
      ))}
    </div>
  );
}

export default StaggerPage;
