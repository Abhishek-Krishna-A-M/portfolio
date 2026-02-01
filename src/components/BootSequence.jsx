import { TypeAnimation } from "react-type-animation";
import banner from "../commands/banner";

export default function BootSequence({ onFinish }) {
  return (
    <div className="text-left max-w-xl p-4">
      {banner}
      <TypeAnimation
        sequence={[
          "Initializing ak@portfolio...",
          500,
          "Loading shell modules...",
          500,
          "Access granted.",
          500,
          "Type 'help' to begin.",
          1000,
          onFinish,
        ]}
        speed={70}
        repeat={0}
        cursor={true}
      />
    </div>
  );
}
