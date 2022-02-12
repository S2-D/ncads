import { useState } from "react";
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
      <h3>기본 정보</h3>

      {isEdit ? (
        <table>
          <tr>
            <th>기관명</th>
            <input
              name="institutionName"
              onChange={onChange}
              value={institutionName}
            />
            <th>사건번호</th>
            <input
              name="caseNumber"
              type="number"
              onChange={onChange}
              value={caseNumber}
            />
            <th>사례관리지역</th>
            <input
              name="caseManagementArea"
              onChange={onChange}
              value={caseManagementArea}
            />
          </tr>
          <tr>
            <th>사건담당자</th>
            <input name="caseManager" onChange={onChange} value={caseManager} />
            <th>신고접수일시</th>
            <input
              name="reportDate"
              type="datetime-local"
              onChange={onChange}
              value={reportDate}
            />
            <th>집단시설 내 사건</th>
            <input
              name="facilityCase"
              onChange={onChange}
              value={facilityCase}
            />
          </tr>
        </table>
      ) : (
        <table>
          <tr>
            <th>기관명</th>
            <td>{institutionName}</td>
            <th>사건번호</th>
            <td>{caseNumber}</td>
            <th>사례관리지역</th>
            <td>{caseManagementArea}</td>
          </tr>
          <tr>
            <th>사건담당자</th>
            <td>{caseManager}</td>
            <th>신고접수일시</th>
            <td>{reportDate}</td>
            <th>집단시설 내 사건</th>
            <td>{facilityCase}</td>
          </tr>
        </table>
      )}
    </>
  );
};

export default BasicInfo;
