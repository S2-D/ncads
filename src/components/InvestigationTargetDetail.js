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
    inputs,
  ]);

  const deleteDetail = (index1) => {
    let filterArr = investigationDetailList.filter(
      (data, index) => index !== index1
    );
    setInvestigationDetailList(filterArr);
  };

  const changeDetailList = (index, name, value) => {
    let investigationDetailList1 = [...investigationDetailList];
    investigationDetailList1[index] = {
      ...investigationDetailList1[index],
      [name]: value,
    };
    setInvestigationDetailList(investigationDetailList1);
  };

  return (
    <>
      <div className="table-header" style={{ justifyContent: "flex-end" }}>
        {isView && (
          <>
            {/* <h4>조사대상 및 내용</h4> */}
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setInvestigationDetailList([
                  ...investigationDetailList,
                  inputs,
                ]);
              }}
            >
              조사대상 및 내용 추가
            </button>
          </>
        )}
      </div>
      {investigationDetailList.map((value, index) => (
        <InvestigationTargetDetailItem
          key={index}
          value={value}
          index={index}
          isView={isView}
          deleteDetail={deleteDetail}
          changeDetailList={changeDetailList}
        />
      ))}
    </>
  );
};

export default InvestigationTargetDetail;
