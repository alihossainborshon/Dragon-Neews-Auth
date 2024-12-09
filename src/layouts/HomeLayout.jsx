import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNav from "../components/LayoutComponents/RightNav";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header> 
        <section className="w-11/12 mx-auto pt-5">
          <LatestNews></LatestNews>
        </section>        
      </header>
      <nav className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-5">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="center col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
