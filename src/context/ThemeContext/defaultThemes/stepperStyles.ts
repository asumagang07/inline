export const stepperStyles = {
  rootCls: {
    base: "inline-flex items-center p-4 gap-4 text-sm",
    statusCls: {
      base: "min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center rounded-full z-[1]",
      status: {
        active: {
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
        pending: {
          colors: {
            blue: "bg-blue-100 text-blue-700",
            red: "bg-red-100 text-red-700",
            orange: "bg-orange-100 text-orange-700",
            yellow: "bg-yellow-100 text-yellow-700 ",
            purple: "bg-purple-100 text-purple-700 ",
            green: "bg-green-100 text-green-700 ",
            default: "bg-default-100 text-default-700 ",
          },
        },
        progress: {
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
        completed: {
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
        error: {
          colors: {
            blue: "text-white bg-red-500 ",
            red: "text-white bg-red-500 ",
            orange: "text-white bg-red-500 ",
            yellow: "text-white bg-red-500 ",
            purple: "text-white bg-red-500 ",
            green: "text-white bg-red-500 ",
            default: "text-white bg-red-500 ",
          },
        },
        disabled: {
          colors: {
            blue: "text-white bg-default-300 ",
            red: "text-white bg-default-300 ",
            orange: "text-white bg-default-300 ",
            yellow: "text-white bg-default-300 ",
            purple: "text-white bg-default-300 ",
            green: "text-white bg-default-300 ",
            default: "text-white bg-default-300 ",
          },
        },
        // pending: "bg-blue-100 text-blue-700",
        // progress: "w-10 h-10",
        // completed: "bg-blue-500 text-white",
        // error: "bg-red-500 text-white",
        // disabled: "",
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
