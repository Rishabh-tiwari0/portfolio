import featuredWorks from "../../../public/data/featuredWorks.json";
const FeaturedWorks = () => {
  return (
    <div className="w-full">
      <h3 className="text-[18px] font-light text-[var(--Dark)] font-[Heebo] text-center mt-5 ">
        Featured Works
      </h3>
      {/* card container */}

      <div className="w-[90%] mx-auto mt-5 border-b-[1.5px] pb-7 border-gray-300 sm:flex sm:gap-10 sm:w-[70%]">
        {/* img container */}
        <div className="sm:max-w-[300px]  rounded-sm overflow-hidden">
          <img src={featuredWorks[0].image} alt="dashboard img" />
        </div>
        {/* text container */}
        <div>
          <h3 className="text-[var(--Dark)] font-[Heebo] font-semibold text-[22px] sm:text-3xl">
            {featuredWorks[0].title}
          </h3>
          <p className="flex gap-10 mt-3  ">
            <span className="bg-[var(--Dark)] text-white font-bold text-[14px] px-1 py-0.5 rounded-full">
              {featuredWorks[0].year}
            </span>
            <span>{featuredWorks[0].category}</span>
          </p>
          <p className="mt-3 text-[var(--Dark)] font-[Heebo] font-light text-[16px]">
            {featuredWorks[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
