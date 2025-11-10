import { TypeAnimation } from "react-type-animation";
import banner from "../commands/banner";

export default function BootSequence({ onFinish }) {
  return (
    <div className="text-left max-w-xl p-4">
      {banner}
      <TypeAnimation
        sequence={[
          "Initializing ak@portfolio...",
          800,
          "Loading shell modules...",
          800,
          "Access granted.",
          700,
          "Type 'help' to begin.",
          1000,
          onFinish,
        ]}
        speed={50}
        repeat={0}
        cursor={true}
      />
    </div>
  );
}
