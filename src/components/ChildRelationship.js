import { useState } from "react";
import ChildRelationshipItem from "./ChildRelationshipItem";

const ChildRelationship = ({ isView }) => {
  const inputs = {
    no: "",
    childName: "",
    abuserName: "",
    relationshipWithChild: "",
    livingTogether: "",
    reReport: "",
    specialCare: "",
    IndividualRegistrationNumber: "",
  };
  const [childRelationshipList, setChildRelationshipList] = useState([
    {
      no: "",
      childName: "",
      abuserName: "",
      relationshipWithChild: "",
      livingTogether: "",
      reReport: "",
      specialCare: "",
      IndividualRegistrationNumber: "",
    },
  ]);

  return (
    <>
      <div className="table-header">
        <h4>대상자 관계</h4>
        {isView && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setChildRelationshipList([...childRelationshipList, inputs]);
            }}
          >
            추가
          </button>
        )}
      </div>

      <table className="table table-bordered">
        <tr>
          <th>No</th>
          <th>아동명</th>
          <th>학대행위자명</th>
          <th>아동과의 관계</th>
          <th>아동과의 동거여부</th>
          <th>재신고/동일신고 여부</th>
          <th>특별관리유형</th>
          <th>개별접수번호</th>
        </tr>
        {childRelationshipList.map(() => (
          <ChildRelationshipItem isView={isView} />
        ))}
      </table>
    </>
  );
};

export default ChildRelationship;
