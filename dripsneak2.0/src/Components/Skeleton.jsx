function Skeleton() {
  return (
    <div className="relative flex flex-col mt-6 text-scorpion-500 bg-scorpion-50 shadow-md bg-clip-border rounded-xl w-64 animate-pulse">
      <div className="relative grid h-40 mx-4 mt-4 overflow-hidden text-scorpion-500 bg-scorpion-300 bg-clip-border rounded-xl place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 text-scorpion-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          ></path>
        </svg>
      </div>
      <div className="p-6">
        <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-scorpion-300 rounded-full text-inherit">
          &nbsp;
        </div>
        <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-scorpion-300 rounded-full text-inherit">
          &nbsp;
        </div>
        <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-scorpion-300 rounded-full text-inherit">
          &nbsp;
        </div>
        <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-scorpion-300 rounded-full text-inherit">
          &nbsp;
        </div>
        <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-scorpion-300 rounded-full text-inherit">
          &nbsp;
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          disabled=""
          tabIndex="-1"
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-scorpion-50 scorpionshadow-scorpion-700/10 hover:scorpionshadow-scorpion-700/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-scorpion-300 shadow-none hover:shadow-none"
          type="button"
        >
          &nbsp;
        </button>
      </div>
    </div>
  );
}

export const ProductSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
      {[...Array(9)].map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export const ProductOverviewSkeleton = () => {
  return (
    <section className="text-scorpion-900 overflow-hidden bg-scorpion-50">
      <div className="container px-5 py-20 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <div className="bg-scorpion-200 animate-pulse w-full h-96 lg:w-2/3 rounded-lg"></div>
        </div>
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
          <div className="bg-scorpion-200 animate-pulse w-1/2 h-6 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-1/2 h-6 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-20 lg:w-3/4 mb-4 rounded"></div>
          <div className="bg-scorpion-200 animate-pulse w-full h-10 lg:w-3/4 mb-4 rounded"></div>
        </div>
      </div>
    </section>
  );
};
