export const cardStyles = {
  rootCls: {
    base: "flex flex-col bg-white border rounded-md shadow-md",
    notWidthFull: "min-w-[300px] max-w-[300px]",
  },
  headerCls: {
    base: "flex flex-row items-center gap-3",
    imagePosition: {
      top: "px-3 pt-3",
      center: "p-3",
      bottom: "px-3 pt-3 pb-0",
    },
    title: {
      containerCls: "flex flex-col",
      titleCls: "font-bold",
      subTitleCls: "text-xs text-opacity-40",
    },
  },
  imageCls: {
    base: "flex relative w-full min-h-[8rem] bg-gray-300",
    imagePosition: {
      top: "order-first",
      center: "order-none",
      bottom: "order-last",
    },
  },
};
