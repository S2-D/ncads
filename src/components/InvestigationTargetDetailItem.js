import { useState } from "react";

const InvestigationTargetDetailItem = ({
  value,
  isView,
  index,
  deleteDetail,
  changeDetailList,
}) => {
  const onChange = (e) => {
    const { value, name } = e.target;
    changeDetailList(index, name, value);
  };

  const {
    relationshipWithChild,
    name,
    gender,
    phoneNumber,
    investigationTime,
    observations,
    abuseOrNot,
    targetCharacteristics,
    targetDesire,
    etc,
  } = value;

  return (
    <table className="table table-bordered">
      <tr>
        <th colSpan={5}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px,30px",
            }}
          >
            조사대상 및 내용 {index + 1}
            {isView && (
              <button
                style={{ right: "80px" }}
                value={index}
                className="btn btn-outline-primary"
                onClick={(e) => {
                  deleteDetail(Number(e.target.value));
                }}
              >
                조사대상 및 내용 {index + 1} 삭제
              </button>
            )}
          </div>
        </th>
      </tr>
      {isView ? (
        <>
          <tr>
            <th rowSpan={3} style={{ width: "165px" }}>
              조사대상자
            </th>
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
            <td colSpan={4}>
              <textarea
                className="form-control"
                name="observations"
                onChange={onChange}
                value={observations}
              />
            </td>
          </tr>{" "}
          <tr>
            <th colSpan={4}>학대발생여부</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea
                className="form-control"
                name="abuseOrNot"
                onChange={onChange}
                value={abuseOrNot}
              />{" "}
            </td>
          </tr>
          <tr>
            <th colSpan={4}>대상자 특성</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea
                className="form-control"
                name="targetCharacteristics"
                onChange={onChange}
                value={targetCharacteristics}
              />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>대상자 욕구</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea
                className="form-control"
                name="targetDesire"
                onChange={onChange}
                value={targetDesire}
              />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>기타</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea
                className="form-control"
                name="etc"
                onChange={onChange}
                value={etc}
              />{" "}
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <th rowSpan={3} style={{ width: "232px" }}>
              조사대상자
            </th>
            <th>아동과의 관계</th>
            <td colSpan={3}>{relationshipWithChild}</td>
          </tr>
          <tr>
            {" "}
            <th style={{ width: "232px" }}>성명</th>
            <td>{name}</td>
            <th style={{ width: "232px" }}>성별</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td colSpan={3}>{phoneNumber}</td>
          </tr>
          <tr>
            <th rowSpan={11}>세부조사내용</th>
            <th>조사시간</th>
            <td colSpan={3}>{investigationTime}</td>
          </tr>
          <tr>
            <th colSpan={4}>관찰사항</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea readOnly={true} value={observations} />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>학대발생여부</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea readOnly={true} value={abuseOrNot} />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>대상자 특성</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea readOnly={true} value={targetCharacteristics} />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>대상자 욕구</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea readOnly={true} value={targetDesire} />
            </td>
          </tr>
          <tr>
            <th colSpan={4}>기타</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea readOnly={true} value={etc} />
            </td>
          </tr>
        </>
      )}
    </table>
  );
};
export default InvestigationTargetDetailItem;
