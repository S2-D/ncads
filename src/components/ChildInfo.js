import { useState } from "react";
import ChildInfoItem from "./ChildInfoItem";

const ChildInfo = ({ isView }) => {
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
  const [childInfoList, setChildInfoList] = useState([
    {
      no: "",
      relationshipInfo: "",
      name: "",
      gender: "",
      age: "",
      residenRegistrationNumber: "",
      educationalInstitution: "",
      phoneNumber: "",
      copyRequestState: "",
    },
  ]);

  return (
    <>
      <div className="table-header">
        <h4>대상자 정보</h4>{" "}
        {isView && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setChildInfoList([...childInfoList, inputs]);
            }}
          >
            대상자 정보 추가
          </button>
        )}
      </div>
      <table className="table table-bordered">
        <tr>
          <th style={{ width: "80px" }}>No</th>
          <th>대상자정보</th>
          <th>성명</th>
          <th>성별</th>
          <th>나이</th>
          <th>주민등록번호</th>
          <th>교육기관</th>
          <th>전화번호</th>
          <th>주민등록 등초본 신청 상태</th>
        </tr>
        {childInfoList.map(() => (
          <ChildInfoItem isView={isView} />
        ))}
      </table>
    </>
  );
};

export default ChildInfo;
