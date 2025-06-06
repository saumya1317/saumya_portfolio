import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-10 xl:mt-0 mt-32 bg-gray-900 py-10">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-800 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              
             
              <CountUp suffix= {item.suffix}   end={item.value} />
            </div>
            <div className="text-white/60 text-lg text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
