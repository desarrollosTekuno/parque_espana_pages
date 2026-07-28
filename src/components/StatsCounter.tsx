import { useEffect, useState } from "react";
import { HomeContent } from "../constants/Home";  // ← Así

function useCountUp(target: number, duration = 1500, interval = 5000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const runAnimation = () => {
      const start = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    runAnimation();
    const intervalId = window.setInterval(runAnimation, interval);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, interval]);

  return { count };
}

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
}

function CounterItem({ value, suffix, label }: CounterItemProps) {
  const { count } = useCountUp(value);

  return (
    <div className="text-center text-[#3C3C3C]">
      <p className="text-[24px] font-bold text-[#0097b2] sm:text-[26px] lg:w-full lg:text-[32px]">
        +{count}
        {suffix}
      </p>
      <p className="mt-2 text-[16px]  sm:text-[18px] lg:w-full lg:text-[21px] ">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const { counters } = HomeContent.stats;

  return (
        <div className="mt-20 sm:p-8 lg:-mx-[15%] ">
      <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4">
        {counters.map((counter) => (
          <CounterItem key={counter.label} {...counter} />
        ))}
      </div>
    </div>
  );
}