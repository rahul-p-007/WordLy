import stringToColor from "@/lib/stringToColor";
import { motion } from "framer-motion";
function FollowPointer({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const color = stringToColor(info.email || "1");

  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
        strokeWidth={1}
        className={`h-6 w-6 text-[${color}] transform rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-[${color}]`}
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <path fill={color} d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z"></path>
      </svg>

      <motion.div
        style={{
          backgroundColor: color,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className="px-2 py-2 bg-neutral-200 text-black font-bold whitespace-nowrap min-w-max text-xs rounded-full"
      >
        {info.name || info.email}
      </motion.div>
    </motion.div>
  );
}

export default FollowPointer;
