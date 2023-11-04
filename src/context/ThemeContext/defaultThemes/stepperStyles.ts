export const stepperStyles = {
  rootCls: {
    base: "inline-flex items-center p-4 gap-4 text-sm",
    statusCls: {
      base: "w-8 h-8 flex items-center justify-center rounded-full z-[1]",
      status: {
        active: "bg-blue-500 text-white",
        pending: "bg-blue-100 text-blue-700",
        progress: "w-10 h-10",
        completed: "bg-blue-500 text-white",
        error: "bg-red-500 text-white",
        disabled: "",
      },
    },
    borderRadius: {
      square: "rounded-none",
      default: "rounded",
      full: "rounded-full",
    },
    colors: {
      blue: "text-blue-800 bg-blue-50 ",
      red: "text-red-800 bg-red-50 ",
      orange: "text-orange-800 bg-orange-50 ",
      yellow: "text-yellow-800 bg-yellow-50 ",
      purple: "text-purple-800 bg-purple-50 ",
      green: "text-green-800 bg-green-50 ",
      default: "text-default-800 bg-default-50 ",
    },
    borders: {
      blue: "border border-blue-300",
      red: "border border-red-300",
      orange: "border border-orange-300",
      yellow: "border border-yellow-300",
      purple: "border border-purple-300",
      green: "border border-green-300",
      default: "border border-default-300",
    },
  },
};
