import { useState } from "react";
import InvestigationDetailItem from "./InvestigationDetailItem";
import InvestigationTargetDetail from "./InvestigationTargetDetail";
import InvestigatorOpinion from "./InvestigatorOpinion";

const InvestigationDetail = ({ isView }) => {
  const inputs = {
    requestingAgency: "",
    accompanying: "동행",
    counselor: "",
    companionCounselor: "",
    therapist: "",
    policeman: "",
    relatedPublicOfficial: "",
    investigationMethod: "",
    movingTime: "",
    investigationTime: "",
    investigationLocation: "",
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
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setInvestigationDetailList([
                  ...investigationDetailList,
                  inputs,
                ]);
              }}
            >
              조사 내용 추가
            </button>
          </>
        )}
      </div>
      {investigationDetailList.map((value, index) => (
        <>
          <InvestigationDetailItem
            key={index}
            value={value}
            investigationDetailList={investigationDetailList}
            setInvestigationDetailList={setInvestigationDetailList}
            index={index}
            isView={isView}
            deleteDetail={deleteDetail}
            changeDetailList={changeDetailList}
            inputs={inputs}
          />
          <InvestigationTargetDetail isView={isView} />
          <InvestigatorOpinion isView={isView} />
        </>
      ))}
    </>
  );
};

export default InvestigationDetail;
