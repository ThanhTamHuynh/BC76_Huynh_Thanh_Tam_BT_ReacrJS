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
        <div className="grid grid-cols-6 gap-13">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
