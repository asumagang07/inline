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
  },
  statusCls: {
    value: {
      active: "bg-green-500",
      offline: "bg-red-500",
      busy: "bg-purple-500",
    },
  },
};
