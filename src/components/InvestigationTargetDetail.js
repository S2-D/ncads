import { useState } from "react";
import ChildInfoItem from "./ChildInfoItem";

const InvestigationTargetDetail = ({ isEdit }) => {
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
        {isEdit && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setInvestigationDetailList([...investigationDetailList, inputs]);
            }}
          >
            추가
          </button>
        )}
      </div>
      {isEdit ? (
        <table className="table table-bordered">
          <tr>
            <th colspan={5}>조사대상 및 내용1</th>
          </tr>
          <tr>
            <th rowSpan={3}>조사대상자</th>
            <th>아동과의 관계</th>
            <td colSpan={3}>
              <input
                className="form-control"
                name="relationshipWithChild"
                onChange={onChange}
                value={relationshipWithChild}
              />
            </td>
          </tr>
          <tr>
            {" "}
            <th>성명</th>
            <td>
              <input
                className="form-control"
                name="name"
                onChange={onChange}
                value={name}
              />
            </td>
            <th>성별</th>
            <td>
              <input
                className="form-control"
                name="gender"
                onChange={onChange}
                value={gender}
              />
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td colSpan={3}>
              <input
                className="form-control"
                name="phoneNumber"
                onChange={onChange}
                value={phoneNumber}
              />
            </td>
          </tr>
          <tr>
            <th rowSpan={11}>세부조사내용</th>
            <th>조사시간</th>
            <td colSpan={3}>
              <input
                className="form-control"
                name="investigationTime"
                onChange={onChange}
                value={investigationTime}
              />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>관찰사항</th>
          </tr>
          <tr>
            <textarea
              colSpan={4}
              className="form-control"
              name="observations"
              onChange={onChange}
              value={observations}
            />
          </tr>{" "}
          <tr>
            <th colSpan={4}>학대발생여부</th>
          </tr>
          <tr>
            <textarea
              colSpan={4}
              className="form-control"
              name="abuseOrNot"
              onChange={onChange}
              value={abuseOrNot}
            />{" "}
          </tr>
          <tr>
            <th colSpan={4}>대상자 특성</th>
          </tr>
          <tr>
            <textarea
              colSpan={4}
              className="form-control"
              name="targetCharacteristics"
              onChange={onChange}
              value={targetCharacteristics}
            />
          </tr>
          <tr>
            <th colSpan={4}>대상자 욕구</th>
          </tr>
          <tr>
            <textarea
              colSpan={4}
              className="form-control"
              name="targetDesire"
              onChange={onChange}
              value={targetDesire}
            />{" "}
          </tr>
          <tr>
            <th colSpan={4}>기타</th>
          </tr>
          <tr>
            <textarea
              colSpan={4}
              className="form-control"
              name="etc"
              onChange={onChange}
              value={etc}
            />{" "}
          </tr>
        </table>
      ) : (
        <table className="table table-bordered">
          <tr>
            <th style={{ width: "165px" }}>동행요청</th>
            <th style={{ width: "165px" }}>요청기관</th>
            <td style={{ width: "250px" }}>{requestingAgency}</td>
            <th style={{ width: "165px" }}>동행여부</th>
            <td style={{ width: "250px" }}>{accompanying}</td>
          </tr>
          <tr>
            <th rowSpan={5}>조사자</th>
            <th>상담원</th>
            <td colSpan={3}>{counselor}</td>
          </tr>
          <tr>
            <th>동행 상담원</th>
            <td colSpan={3}>{companionCounselor}</td>
          </tr>
          <tr>
            <th>치료사</th>
            <td colSpan={3}>{therapist}</td>
          </tr>
          <tr>
            <th>경찰</th>
            <td colSpan={3}>{policeman}</td>
          </tr>
          <tr>
            <th>관계공무원</th>
            <td colSpan={3}>{relatedPublicOfficial}</td>
          </tr>
          <tr>
            <th>조사방법</th>
            <td colSpan={4}>{investigationMethod}</td>
          </tr>
          <tr>
            <th>이동 총 소요시간</th>
            <td colSpan={2}>{movingTime}</td>
            <th>조사 총 소요시간</th>
            <td>{investigationTime}</td>
          </tr>
          <tr>
            <th>조사장소</th>
            <td colSpan={4}>{investigationLocation}</td>
          </tr>
        </table>
      )}
    </>
  );
};

export default InvestigationTargetDetail;
