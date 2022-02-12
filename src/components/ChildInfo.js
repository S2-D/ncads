import { useState } from "react";

import ChildInfoInputs from "./ChildinfoInputs";
const ChildInfo = ({ isEdit }) => {
  const [inputs, setInputs] = useState({
    no: "",
    relationshipInfo: "",
    name: "",
    gender: "",
    age: "",
    residenRegistrationNumber: "",
    educationalInstitution: "",
    phoneNumber: "",
    copyRequestState: "",
  });
  const {
    no,
    relationshipInfo,
    name,
    gender,
    age,
    residenRegistrationNumber,
    educationalInstitution,
    phoneNumber,
    copyRequestState,
  } = inputs;

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
        {isEdit ? (
          <ChildInfoInputs inputs={inputs} setInputs={setInputs} />
        ) : (
          <tr>
            <td>{no}</td>
            <td>{relationshipInfo}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{residenRegistrationNumber}</td>
            <td>{educationalInstitution}</td>
            <td>{phoneNumber}</td>
            <td>{copyRequestState}</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default ChildInfo;
