import { useState } from "react";

const ChildInfoItem = ({ isView }) => {
  const [inputs, setInputs] = useState({
    no: "",
    relationshipInfo: "",
    name: "",
    gender: "",
    age: "",
    residenRegistrationNumber: "",
    educationalInstitution: "",
    phoneNumber: "",
    copyRequestState: "",
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
    relationshipInfo,
    name,
    gender,
    age,
    residenRegistrationNumber,
    educationalInstitution,
    phoneNumber,
    copyRequestState,
  } = inputs;
  return (
    <tr>
      {isView ? (
        <>
          <td>
            <input
              className="form-control"
              name="no"
              onChange={onChange}
              value={no}
            />
          </td>
          <td>
            <input
              className="form-control"
              name="relationshipInfo"
              onChange={onChange}
              value={relationshipInfo}
            />
          </td>
          <td>
            <input
              className="form-control"
              name="name"
              onChange={onChange}
              value={name}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="gender"
              onChange={onChange}
              value={gender}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="age"
              type="number"
              onChange={onChange}
              value={age}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="residenRegistrationNumber"
              onChange={onChange}
              value={residenRegistrationNumber}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="educationalInstitution"
              onChange={onChange}
              value={educationalInstitution}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="phoneNumber"
              onChange={onChange}
              value={phoneNumber}
            />{" "}
          </td>
          <td>
            <input
              className="form-control"
              name="copyRequestState"
              onChange={onChange}
              value={copyRequestState}
            />
          </td>
        </>
      ) : (
        <>
          <td>{no}</td>
          <td>{relationshipInfo}</td>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{residenRegistrationNumber}</td>
          <td>{educationalInstitution}</td>
          <td>{phoneNumber}</td>
          <td>{copyRequestState}</td>
        </>
      )}
    </tr>
  );
};
export default ChildInfoItem;
