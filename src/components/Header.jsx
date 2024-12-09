import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 pt-10">
      <div className="logo">
        <img className="w-[400px]" src={logo} alt="LOGO" />
      </div>
      <h2 className="text-lg font-normal text-[#706f6fdb]">Journalism Without Fear or Favour</h2>
      <p className="text-lg font-medium text-[#706F6F]">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;
