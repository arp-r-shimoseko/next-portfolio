export const navContainer = {
  nav: "w-[33.3%] h-screen fixed bg-[rgba(223,224,227,0.8)] z-10 group transition-opacity duration-400 opacity-0 hover:opacity-100",
  list: "pl-6 md:pl-10 text-2xl md:text-4xl font-medium text-gray-800 leading-loose absolute bottom-14 space-y-2",
};

export const navText = {
  list: (duration: string) => `transform -translate-x-full transition-all group-hover:translate-x-0 ${duration}`,
  link: "hover:text-blue-500",
};
