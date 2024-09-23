import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { BodyLeftPanel } from "./my-components/body-left-section";
import { BodyRightSection } from "./my-components/body-right-section";
import { Header } from "./my-components/header";
import { Footer } from "./my-components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-lvh p-5 flex flex-col bg-c-1">
        <Header />
        <div className=" h-full flex flex-row w-full overflow-auto">
          <BodyLeftPanel />
          <BodyRightSection />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
