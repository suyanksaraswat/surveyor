import { useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import "./App.css";
import { Report } from "./components/Report";

function App() {
  const [count, setCount] = useState(0);
  const show = true;
  const element = document.getElementById("invoice");

  return (
    <>
      <div className="App">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

      </div>
        <Report />
    </>
  );
}

export default App;
