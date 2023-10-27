export const buttonStyles = {
  rootCls: {
    base: "outline-none inline-flex items-center justify-center whitespace-nowrap transition-all duration-150 ease-in-out !leading-none",
    width_full: "w-full",
    state: {
      default: "cursor-pointer",
      disabled: "opacity-50 cursor-not-allowed pointer-events-none",
    },
    sizes: {
      sm: "text-[0.875rem] h-7",
      default: "text-[1rem] h-[2.125rem]",
      md: "text-[1.125rem] h-10",
      lg: "text-[1.25rem] h-12",
    },
    borders: {
      solid: "",
      outlined: "border border-solid",
      flat: "border border-transparent",
    },
    borderRadius: {
      square: "rounded-none",
      default: "rounded",
      full: "rounded-full",
    },
    // variants and colors
    variants: {
      solid: {
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
      outlined: {
        colors: {
          blue: "text-blue-500 bg-white border-blue-500",
          red: "text-red-500 bg-white border-red-500",
          orange: "text-orange-500 bg-white border-orange-500",
          yellow: "text-yellow-500 bg-white border-yellow-500",
          purple: "text-purple-500 bg-white border-purple-500",
          green: "text-green-500 bg-white border-green-500",
          default: "text-default-500 bg-white border-default-500",
        },
      },
      flat: {
        colors: {
          blue: "text-blue-500 bg-transparent",
          red: "text-red-500 bg-transparent",
          orange: "text-orange-500 bg-transparent",
          yellow: "text-yellow-500 bg-transparent",
          purple: "text-purple-500 bg-transparent",
          green: "text-green-500 bg-transparent",
          default: "text-default-500 bg-transparent",
        },
      },
    },
    hoverable: {
      variants: {
        solid: {
          colors: {
            blue: "hover:bg-blue-700",
            red: "hover:bg-red-700",
            orange: "hover:bg-orange-700",
            yellow: "hover:bg-yellow-700",
            purple: "hover:bg-purple-700",
            green: "hover:bg-green-700",
            default: "hover:bg-default-700",
          },
        },
        outlined: {
          colors: {
            blue: "hover:text-blue-700 hover:bg-blue-50",
            red: "hover:text-red-700 hover:bg-red-50",
            orange: "hover:text-orange-700 hover:bg-orange-50",
            yellow: "hover:text-yellow-700 hover:bg-yellow-50",
            purple: "hover:text-purple-700 hover:bg-purple-50",
            green: "hover:text-green-700 hover:bg-green-50",
            default: "hover:text-default-700 hover:bg-default-50",
          },
        },

        flat: {
          colors: {
            blue: "hover:text-blue-700 hover:bg-blue-50",
            red: "hover:text-red-700 hover:bg-red-50",
            orange: "hover:text-orange-700 hover:bg-orange-50",
            yellow: "hover:text-yellow-700 hover:bg-yellow-50",
            purple: "hover:text-purple-700 hover:bg-purple-50",
            green: "hover:text-green-700 hover:bg-green-50",
            default: "hover:text-default-700 hover:bg-default-50",
          },
        },
      },
    },
    spacing: {
      icon_and_or_label: {
        sm: "px-2 gap-1.5",
        default: "px-2.5 gap-2",
        md: "px-3.5 gap-2.5",
        lg: "px-4 gap-3",
      },
      icon_only: {
        sm: "w-7",
        default: "w-[2.125rem]",
        md: "w-10",
        lg: "w-12",
      },
    },
  },
};
