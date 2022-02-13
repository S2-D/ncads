import { useState } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
import ChildInfo from "./components/ChildInfo";
import ChildRelationship from "./components/ChildRelationship";
import Compelete from "./components/Compelete";
import InvestigationDetail from "./components/InvestigationDetail";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "완료" : "수정"}
      </button>
      <div className="app-container">
        <h2>
          아동학대조사{"  "}
          {isEdit && <small class="text-muted"> (수정 모드)</small>}
        </h2>

        <BasicInfo isEdit={isEdit} />
        <ChildInfo isEdit={isEdit} />
        <ChildRelationship isEdit={isEdit} />
        <Compelete isEdit={isEdit} />
        <hr />
        <InvestigationDetail isEdit={isEdit} />
      </div>
    </div>
  );
}

export default App;
