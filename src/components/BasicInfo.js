import { useState } from "react";
const BasicInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputs, setInputs] = useState({
    institutionName: "",
    caseNumber: "",
    caseManagementArea: "",
  });
  const { institutionName, caseNumber, caseManagementArea } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <>
      <h3>기본 정보</h3>
      <button
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "완료" : "수정"}
      </button>
      <table>
        <tr>
          <th>기관명</th>
          {isEdit ? (
            <input
              name="institutionName"
              onChange={onChange}
              value={institutionName}
            />
          ) : (
            <td>{institutionName}</td>
          )}
          <th>사건번호</th>
          {isEdit ? (
            <input
              name="caseNumber"
              type="number"
              onChange={onChange}
              value={caseNumber}
            />
          ) : (
            <td>{caseNumber}</td>
          )}
          <th>사례관리지역</th>
          {isEdit ? (
            <input
              name="caseManagementArea"
              onChange={onChange}
              value={caseManagementArea}
            />
          ) : (
            <td>{caseManagementArea}</td>
          )}
        </tr>
        <tr>
          <th>사건담당자</th>
          <td>김은진</td>
          <th>신고접수일시</th>
          <td>2020-12-31(목) 13:40</td>
          <th>집단시설 내 사건</th>
          <td>해당사항 없음</td>
        </tr>
      </table>
    </>
  );
};

export default BasicInfo;
