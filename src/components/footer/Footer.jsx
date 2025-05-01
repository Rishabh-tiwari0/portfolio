const Footer = () => {
  return (
    // contains the footer of the page
    <div className="w-full h-[150px] ">
      {/* contains icons */}
      <div className="text-[35px] flex justify-center items-center gap-10 mt-10">
        <a href="">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/rishabh-tiwari-2b5a55286/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      {/* contains the text */}
      <div className="text-center mt-2 text-[14px] font-[Heebo]">
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
