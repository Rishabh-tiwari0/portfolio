const RecentPost = () => {
  const recentPosts = [
    {
      title: "Understanding Time Complexity in Algorithms",
      date: "2025-04-22",
      tags: ["Algorithms", "Data Structures", "Big-O"],
      description:
        "A beginner-friendly guide to analyzing time complexity in algorithms with real-world examples and visualizations.",
    },
    {
      title: "What is Machine Learning? A CS Perspective",
      date: "2025-04-21",
      tags: ["AI", "Machine Learning", "Computer Science"],
      description:
        "Dive into the basics of machine learning, covering key concepts like supervised and unsupervised learning.",
    },
    {
      title: "What is Machine Learning? A CS Perspective",
      date: "2025-04-21",
      tags: ["AI", "Machine Learning", "Computer Science"],
      description:
        "Dive into the basics of machine learning, covering key concepts like supervised and unsupervised learning.",
    },
  ];
  return (
    <div className="mt-11 bg-[#EDF7FA] w-full  p-10 relative">
      <div className="w-full mx-auto sm:w-[70%]  flex justify-center sm:justify-between mb-7">
        <p className="text-[20px] cursor-pointer font-light">Recent posts</p>
        <p className="text-[var(--Secondry)] absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:static">
          View all
        </p>
      </div>
      <div
        className="container mx-auto flex flex-col gap-10 justify-center items-center
       md:flex-row"
      >
        {recentPosts.map((Element, index) => (
          <div
            className="bg-white p-3.5 shadow-md rounded-lg max-w-[418px]"
            key={index}
          >
            <h1 className="text-2xl mb-10 sm:text-3xl">{Element.title}</h1>
            <div className="flex justify-around font-[Heebo] font-light text-[18px]  mb-3.5">
              <p>{Element.date}</p>|
              {Element.tags.map((elem, index) => (
                <p className="text-left" key={index}>{`${elem} , `}</p>
              ))}
            </div>
            <div className="pb-10 ">{Element.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentPost;
