export const avatarStyles = {
  rootCls: {
    base: "relative",
    sizes: {
      sm: "w-8 h-8",
      default: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
    },
    borderRadius: {
      square: "rounded-none",
      default: "rounded",
      full: "rounded-full",
    },
    colors: {
      blue: "text-white bg-blue-500 ",
      red: "text-white bg-red-500 ",
      orange: "text-white bg-orange-500 ",
      yellow: "text-white bg-yellow-500 ",
      purple: "text-white bg-purple-500 ",
      green: "text-white bg-green-500 ",
      default: "text-white bg-default-500 ",
    },
  },
  initialCls: {
    base: "flex items-center justify-center w-full h-full font-medium text-white",
    size: {
      sm: "text-[0.875rem] ",
      default: "text-[1rem] ",
      md: "text-[1.125rem]",
      lg: "text-[1.25rem]",
    },
  },
  statusCls: {
    base: "absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full",
    value: {
      active: "bg-green-500",
      offline: "bg-red-500",
      busy: "bg-purple-500",
    },
  },
};
