import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HomePage() {
  const main = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  useGSAP(
    () => {
      gsap.from(".box", {
        x: 1200,
        y: 200,
        duration: 5,
      });
    },
    { scope: main, dependencies: [count], revertOnUpdate: true }
  );
  return (
    <div ref={main}>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <div className="box flex h-96 w-96 bg-blue-600 justify-center items-center">
        <span className="italic text-white text-4xl"> Boxero {count} </span>
      </div>
    </div>
  );
}

export default HomePage;
