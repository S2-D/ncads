import { useState } from "react";
import InvestigationDetailItem from "./InvestigationDetailItem";
import InvestigationTargetDetail from "./InvestigationTargetDetail";
import InvestigatorOpinion from "./InvestigatorOpinion";

const InvestigationDetail = ({ isView }) => {
  const inputs = {
    requestingAgency: "",
    accompanying: "",
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
    {
      requestingAgency: "",
      accompanying: "",
      counselor: "",
      companionCounselor: "",
      therapist: "",
      policeman: "",
      relatedPublicOfficial: "",
      investigationMethod: "",
      movingTime: "",
      investigationTime: "",
      investigationLocation: "",
    },
  ]);

  return (
    <>
      <div className="table-header"></div>
      {investigationDetailList.map((v, index) => (
        <>
          <InvestigationDetailItem
            investigationDetailList={investigationDetailList}
            setInvestigationDetailList={setInvestigationDetailList}
            index={index}
            isView={isView}
          />
          <InvestigationTargetDetail isView={isView} />
          <InvestigatorOpinion isView={isView} />
        </>
      ))}
    </>
  );
};

export default InvestigationDetail;
