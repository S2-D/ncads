import { useState } from "react";

const ChildInfoItem = ({ isEdit }) => {
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
      {isEdit ? (
        <>
          <td>
            <input name="no" onChange={onChange} value={no} />
          </td>
          <td>
            <input
              name="relationshipInfo"
              onChange={onChange}
              value={relationshipInfo}
            />
          </td>
          <td>
            <input name="name" onChange={onChange} value={name} />{" "}
          </td>
          <td>
            <input name="gender" onChange={onChange} value={gender} />{" "}
          </td>
          <td>
            <input name="age" type="number" onChange={onChange} value={age} />{" "}
          </td>
          <td>
            <input
              name="residenRegistrationNumber"
              onChange={onChange}
              value={residenRegistrationNumber}
            />{" "}
          </td>
          <td>
            <input
              name="educationalInstitution"
              onChange={onChange}
              value={educationalInstitution}
            />{" "}
          </td>
          <td>
            <input name="phoneNumber" onChange={onChange} value={phoneNumber} />{" "}
          </td>
          <td>
            <input
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
