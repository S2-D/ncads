import { useState } from "react";
import "moment/locale/ko";

const changeDate = (dateTime) => {
  var moment = require("moment");

  const changeKorean = moment(dateTime)
    .locale("ko")
    .format("YYYY년 MM월 DD일 (ddd) HH:mm");
  return changeKorean;
};

const BasicInfo = ({ isEdit }) => {
  const [inputs, setInputs] = useState({
    institutionName: "",
    caseNumber: "",
    caseManagementArea: "서울 특별시 양천구",
    caseManager: "",
    reportDate: "",
    facilityCase: "",
  });
  const {
    institutionName,
    caseNumber,
    caseManagementArea,
    caseManager,
    reportDate,
    facilityCase,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <div className="table-header">
        <h4>기본 정보</h4>
      </div>
      {isEdit ? (
        <table className="table table-bordered">
          <tr>
            <th style={{ width: "165px" }}>기관명</th>
            <td style={{ width: "250px" }}>
              <input
                className="form-control"
                name="institutionName"
                onChange={onChange}
                value={institutionName}
              />
            </td>
            <th style={{ width: "165px" }}>사건번호</th>{" "}
            <td style={{ width: "250px" }}>
              <input
                className="form-control"
                name="caseNumber"
                type="number"
                onChange={onChange}
                value={caseNumber}
              />
            </td>
            <th style={{ width: "165px" }}>사례관리지역</th>
            <td style={{ width: "250px" }}>
              <input
                className="form-control"
                name="caseManagementArea"
                onChange={onChange}
                value={caseManagementArea}
              />
            </td>
          </tr>
          <tr>
            <th>사건담당자</th>
            <td>
              <input
                className="form-control"
                name="caseManager"
                onChange={onChange}
                value={caseManager}
              />
            </td>
            <th>신고접수일시</th>
            <td>
              <input
                className="form-control"
                name="reportDate"
                type="datetime-local"
                onChange={onChange}
                value={reportDate}
              />
            </td>
            <th>집단시설 내 사건</th>
            <td>
              <input
                className="form-control"
                name="facilityCase"
                onChange={onChange}
                value={facilityCase}
              />
            </td>
          </tr>
        </table>
      ) : (
        <table className="table table-bordered">
          <tr>
            <th style={{ width: "165px" }}>기관명</th>
            <td style={{ width: "250px" }}>{institutionName}</td>
            <th style={{ width: "165px" }}>사건번호</th>
            <td style={{ width: "250px" }}>{caseNumber}</td>
            <th style={{ width: "165px" }}>사례관리지역</th>
            <td style={{ width: "250px" }}>{caseManagementArea}</td>
          </tr>
          <tr>
            <th>사건담당자</th>
            <td>{caseManager}</td>
            <th>신고접수일시</th>
            <td>{reportDate ? changeDate(reportDate) : null}</td>
            <th>집단시설 내 사건</th>
            <td>{facilityCase}</td>
          </tr>
        </table>
      )}
    </>
  );
};

export default BasicInfo;
