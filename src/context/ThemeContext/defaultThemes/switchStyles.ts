export const switchStyles = {
  rootCls: {
    base: "w-[42px] h-[25px] rounded-full relative shadow-sm outline-none cursor-default hover:shadow-md",
    colors: {
      blue: "bg-blue-200  data-[state=checked]:bg-blue-500",
      red: "bg-red-200  data-[state=checked]:bg-red-500",
      orange: "bg-orange-200  data-[state=checked]:bg-orange-500",
      yellow: "bg-yellow-200  data-[state=checked]:bg-yellow-500",
      purple: "bg-purple-200  data-[state=checked]:bg-purple-500",
      green: "bg-green-200  data-[state=checked]:bg-green-500",
      default: "bg-default-200  data-[state=checked]:bg-default-500",
    },
    disabled:
      "bg-default-700  data-[state=checked]:bg-blue-100 pointer-events-none",
  },
};
