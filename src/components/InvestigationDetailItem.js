const InvestigationDetailItem = ({
  value,
  deleteDetail,
  changeDetailList,
  isView,
  index,
  inputs,
}) => {
  const options = [{ value: "동행" }, { value: "비동행" }];
  const onChange = (e) => {
    const { value, name } = e.target;
    changeDetailList(index, name, value);
  };

  const {
    requestingAgency,
    accompanying,
    counselor,
    companionCounselor,
    therapist,
    policeman,
    relatedPublicOfficial,
    investigationMethod,
    movingTime,
    investigationTime,
    investigationLocation,
  } = value;

  return (
    <>
      {isView ? (
        <>
          <div className="table-header">
            <h4>조사 내용 {index + 1}</h4>
            <button
              className="btn btn-outline-danger"
              value={index}
              onClick={(e) => {
                deleteDetail(Number(e.target.value));
              }}
            >
              조사 내용 {index + 1} 삭제
            </button>
          </div>
          <table className="table table-bordered">
            <tr>
              <th style={{ width: "165px" }}>동행요청</th>
              <th>요청기관</th>
              <td>
                <input
                  className="form-control"
                  name="requestingAgency"
                  onChange={onChange}
                  value={requestingAgency}
                />
              </td>
              <th>동행여부</th>
              <td>
                <select
                  name="accompanying"
                  className="custom-select"
                  onChange={onChange}
                  defaultValue={accompanying}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th rowSpan={5}>조사자</th>
              <th>상담원</th>
              <td colSpan={3}>
                {" "}
                <input
                  className="form-control"
                  name="counselor"
                  onChange={onChange}
                  value={counselor}
                />
              </td>
            </tr>
            <tr>
              <th>동행 상담원</th>
              <td colSpan={3}>
                {" "}
                <input
                  className="form-control"
                  name="companionCounselor"
                  onChange={onChange}
                  value={companionCounselor}
                />
              </td>
            </tr>
            <tr>
              <th>치료사</th>
              <td colSpan={3}>
                {" "}
                <input
                  className="form-control"
                  name="therapist"
                  onChange={onChange}
                  value={therapist}
                />
              </td>
            </tr>
            <tr>
              <th>경찰</th>
              <td colSpan={3}>
                {" "}
                <input
                  className="form-control"
                  name="policeman"
                  onChange={onChange}
                  value={policeman}
                />
              </td>
            </tr>
            <tr>
              <th>관계공무원</th>
              <td colSpan={3}>
                {" "}
                <input
                  className="form-control"
                  name="relatedPublicOfficial"
                  onChange={onChange}
                  value={relatedPublicOfficial}
                />
              </td>
            </tr>
            <tr>
              <th>조사방법</th>
              <td colSpan={4}>
                <input
                  className="form-control"
                  name="investigationMethod"
                  onChange={onChange}
                  value={investigationMethod}
                />
              </td>
            </tr>
            <tr>
              <th>이동 총 소요시간</th>
              <td colSpan={2}>
                <input
                  className="form-control"
                  name="movingTime"
                  onChange={onChange}
                  value={movingTime}
                />
              </td>
              <th>조사 총 소요시간</th>
              <td>
                <input
                  className="form-control"
                  name="investigationTime"
                  onChange={onChange}
                  value={investigationTime}
                />
              </td>
            </tr>
            <tr>
              <th>조사장소</th>
              <td colSpan={4}>
                <input
                  className="form-control"
                  name="investigationLocation"
                  onChange={onChange}
                  value={investigationLocation}
                />
              </td>
            </tr>
          </table>
        </>
      ) : (
        <>
          <div className="table-header">
            <h4>조사 내용 {index + 1}</h4>
          </div>
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
        </>
      )}
    </>
  );
};
export default InvestigationDetailItem;
