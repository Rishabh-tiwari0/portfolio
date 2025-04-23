const RecentPost = () => {
  return (
    <div className="mt-11 bg-[#EDF7FA] w-full flex pt-16 p-10 ">
      <div className="container flex gap-10 justify-center">
        <div className="bg-white p-3.5 shadow-md rounded-lg max-w-[418px]">
          <h1 className="text-3xl mb-10">
            Making a design system from scratch
          </h1>
          <div className="flex justify-around font-[Heebo] font-light text-[18px]  mb-3.5">
            <p>12 Feb 2020</p>|<p className="text-left">Design, Pattern</p>
          </div>
          <div className="pb-10 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
        <div className="bg-white p-3.5 shadow-md rounded-lg max-w-[418px]">
          <h1 className="text-3xl">title</h1>
          <div className="flex justify-between">
            <p>Date</p>
            <p>tags</p>
          </div>
          <div>description</div>
        </div>
      </div>
    </div>
  );
};
export default RecentPost;
