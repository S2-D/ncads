import { useState } from "react";

const InvestigatorOpinion = ({ isView }) => {
  const [opinion, setOpinion] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setOpinion(value);
  };
  return (
    <table className="table table-bordered">
      <tr>
        <th>조사자 종합소견</th>
      </tr>
      <tr>
        {isView ? (
          <textarea
            className="form-control"
            name="opinion"
            onChange={onChange}
            value={opinion}
          />
        ) : (
          <textarea readOnly={true} value={opinion} />
        )}
      </tr>
    </table>
  );
};

export default InvestigatorOpinion;
