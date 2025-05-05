import posts from "../../../public/data/BlogPosts.json";
const page = () => {
  console.log(posts);
  return (
    <div className="sm:w-[80%] w-[90%] mx-auto my-4 ">
      <h1 className="sm:text-4xl text-3xl font-semibold">Blog</h1>
      <div className="flex flex-col gap-4 mt-4">
        {posts.map((post, index) => (
          <div
            className="border-b-[1.5px] border-b-gray-300 pb-[10px] mb-1"
            key={index}
          >
            <div className="text-2xl">{post.title}</div>
            <div className="mb-2">
              <span className="border-r pr-4 mr-4">{post.date}</span>
              <span className="text-gray-500">
                {post.tech.map((val, i) => (
                  <span key={i}>{`${val} , `}</span>
                ))}
              </span>
            </div>
            <div>{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
