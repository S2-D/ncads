import { useState } from "react";
import InvestigationTargetDetailItem from "./InvestigationTargetDetailItem";

const InvestigationTargetDetail = ({ isView }) => {
  const inputs = {
    relationshipWithChild: "",
    name: "",
    gender: "",
    phoneNumber: "",
    investigationTime: "",
    observations: "",
    abuseOrNot: "",
    targetCharacteristics: "",
    targetDesire: "",
    etc: "",
  };
  const [investigationDetailList, setInvestigationDetailList] = useState([
    {
      relationshipWithChild: "",
      name: "",
      gender: "",
      phoneNumber: "",
      investigationTime: "",
      observations: "",
      abuseOrNot: "",
      targetCharacteristics: "",
      targetDesire: "",
      etc: "",
    },
  ]);

  return (
    <>
      <div className="table-header">
        {isView && (
          <>
            <h4>조사대상 및 내용</h4>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setInvestigationDetailList([
                  ...investigationDetailList,
                  inputs,
                ]);
              }}
            >
              추가
            </button>
          </>
        )}
      </div>
      {investigationDetailList.map((v, index) => (
        <InvestigationTargetDetailItem index={index} isView={isView} />
      ))}
    </>
  );
};

export default InvestigationTargetDetail;
