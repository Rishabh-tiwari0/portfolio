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
    <div className="mt-11 bg-[#EDF7FA] w-full flex justify-center pt-16 p-10 ">
      <div
        className="container flex flex-col gap-10 justify-center items-center
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
                <p className="text-left">{`${elem} , `}</p>
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
