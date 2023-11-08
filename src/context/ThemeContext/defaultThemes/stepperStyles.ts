export const stepperStyles = {
  rootCls: {
    base: "inline-flex items-center p-4 gap-4 text-sm",
    statusCls: {
      base: "min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center rounded-full z-[1]",
    },
    colors: {
      current: {
        blue: "text-white bg-blue-500 ",
        red: "text-white bg-red-500 ",
        orange: "text-white bg-orange-500 ",
        yellow: "text-default-700 bg-yellow-500 ",
        purple: "text-white bg-purple-500 ",
        green: "text-white bg-green-500 ",
        default: "text-white bg-default-500 ",
      },
      completed: {
        blue: "text-blue-700 bg-blue-50 ",
        red: "text-red-700 bg-red-50 ",
        orange: "text-orange-700 bg-orange-50 ",
        yellow: "text-yellow-700 bg-yellow-50 ",
        purple: "text-purple-700 bg-purple-50 ",
        green: "text-green-700 bg-green-50 ",
        default: "text-default-700 bg-default-50 ",
      },
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
