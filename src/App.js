import "./App.css";
import { useState } from "react";

import BasicInfo from "./components/BasicInfo";
import ChildInfo from "./components/ChildInfo";
// import ChildRelationship from "./components/ChildRelationship";
// import Compelete from "./components/Compelete";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "완료" : "수정"}
      </button>
      <BasicInfo isEdit={isEdit} />
      <ChildInfo isEdit={isEdit} />
      {/* <ChildRelationship />
      <Compelete /> */}
    </div>
  );
}

export default App;
