import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
