import { useState } from "react";

import ChildInfoInputs from "./ChildInfoInputs";
// import ChildInfoView from "./ChildInfoView";
const ChildInfo = ({ isEdit }) => {
  const [childInfoList, setChildInfoList] = useState([]);

  console.log(childInfoList);
  return (
    <>
      {isEdit && <button onclick={() => {}}>추가</button>}
      <h3>대상자 정보</h3>
      <table>
        <tr>
          <th>No</th>
          <th>대상자정보</th>
          <th>성명</th>
          <th>성별</th>
          <th>나이</th>
          <th>주민등록번호</th>
          <th>교육기관</th>
          <th>전화번호</th>
          <th>주민등록 등초본 신청 상태</th>
        </tr>
        {
          isEdit ? (
            <ChildInfoInputs
              childInfoList={childInfoList}
              setChildInfoList={setChildInfoList}
            />
          ) : (
            <span>false</span>
          )
          // <ChildInfoView inputs={inputs} />
        }
      </table>
    </>
  );
};

export default ChildInfo;
