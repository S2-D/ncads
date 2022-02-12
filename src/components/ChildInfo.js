import { useState } from "react";

import ChildInfoItem from "./ChildInfoItem";

const ChildInfo = ({ isEdit }) => {
  const inputs = {
    no: "",
    relationshipInfo: "",
    name: "",
    gender: "",
    age: "",
    residenRegistrationNumber: "",
    educationalInstitution: "",
    phoneNumber: "",
    copyRequestState: "",
  };
  const [childInfoList, setChildInfoList] = useState([]);

  return (
    <>
      {isEdit && (
        <button
          onClick={() => {
            setChildInfoList([...childInfoList, inputs]);
          }}
        >
          추가
        </button>
      )}
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
        {childInfoList.map((item) => (
          <ChildInfoItem isEdit={isEdit} />
        ))}
      </table>
    </>
  );
};

export default ChildInfo;
