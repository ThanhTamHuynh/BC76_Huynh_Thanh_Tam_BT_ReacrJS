import { useState } from "react";
import Header from "./components/BaiTapThucHanhLayout/Header";
import Banner from "./components/BaiTapThucHanhLayout/Banner";
import Item from "./components/BaiTapThucHanhLayout/Item";
import Footer from "./components/BaiTapThucHanhLayout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Header />
        <Banner />
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
