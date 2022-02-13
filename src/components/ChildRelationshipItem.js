import { useState } from "react";

const ChildRelationshipItem = ({ isEdit }) => {
  const [inputs, setInputs] = useState({
    no: "",
    childName: "",
    abuserName: "",
    relationshipWithChild: "",
    livingTogether: "",
    reReport: "",
    specialCare: "",
    IndividualRegistrationNumber: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const {
    no,
    childName,
    abuserName,
    relationshipWithChild,
    livingTogether,
    reReport,
    specialCare,
    IndividualRegistrationNumber,
  } = inputs;

  return (
    <tr>
      {isEdit ? (
        <>
          <td style={{ width: "80px" }}>
            <input
              className="form-control"
              name="no"
              onChange={onChange}
              value={no}
            />
          </td>
          <td>
            <input
              style={{ width: "100px" }}
              className="form-control"
              name="childName"
              onChange={onChange}
              value={childName}
            />
          </td>
          <td>
            <input
              style={{ width: "100px" }}
              className="form-control"
              name="abuserName"
              onChange={onChange}
              value={abuserName}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="relationshipWithChild"
              onChange={onChange}
              value={relationshipWithChild}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="livingTogether"
              onChange={onChange}
              value={livingTogether}
            />{" "}
          </td>
          <td>
            <textarea
              className="form-control"
              name="reReport"
              onChange={onChange}
              value={reReport}
            />
          </td>
          <td>
            <input
              className="form-control"
              name="specialCare"
              onChange={onChange}
              value={specialCare}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="IndividualRegistrationNumber"
              onChange={onChange}
              value={IndividualRegistrationNumber}
            />{" "}
          </td>
        </>
      ) : (
        <>
          <td>{no}</td>
          <td>{childName}</td>
          <td>{abuserName}</td>
          <td>{relationshipWithChild}</td>
          <td>{livingTogether}</td>
          <td>
            <textarea readOnly={true} value={reReport} />
          </td>
          <td>{specialCare}</td>
          <td>{IndividualRegistrationNumber}</td>
        </>
      )}
    </tr>
  );
};
export default ChildRelationshipItem;
