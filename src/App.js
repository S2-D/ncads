import { useState } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
import ChildInfo from "./components/ChildInfo";
// import ChildRelationship from "./components/ChildRelationship";
import Compelete from "./components/Compelete";
import InvestigationDetail from "./components/InvestigationDetail";

function App() {
  const [isView, setIsView] = useState(true);
  return (
    <div className="App">
      <button
        id="noprint"
        className="editBtn btn btn-primary"
        onClick={() => {
          setIsView(!isView);
        }}
      >
        {isView ? "완료" : "수정"}
      </button>
      <div className="app-container">
        <h2>
          아동학대조사{"  "}
          {isView && <small class="text-muted"> (수정 모드)</small>}
        </h2>

        <BasicInfo isView={isView} />
        <ChildInfo isView={isView} />
        {/* <ChildRelationship isView={isView} /> */}
        <Compelete isView={isView} />
        <br />

        <hr />

        <InvestigationDetail isView={isView} />
      </div>
    </div>
  );
}

export default App;
