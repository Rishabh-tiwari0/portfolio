const Footer = () => {
  return (
    // contains the footer of the page
    <div className="w-full h-[150px] ">
      {/* contains icons */}
      <div className="text-[40px] flex justify-center items-center gap-5 mt-10">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      {/* contains the text */}
      <div className="text-center mt-2 text-[14px] font-[Heebo]">
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
