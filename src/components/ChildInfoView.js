const ChildInfoView = ({ item }) => {
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
  } = item;
  return (
    <tr>
      <td>{no}</td>
      <td>{relationshipInfo}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{residenRegistrationNumber}</td>
      <td>{educationalInstitution}</td>
      <td>{phoneNumber}</td>
      <td>{copyRequestState}</td>
    </tr>
  );
};

export default ChildInfoView;
