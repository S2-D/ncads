import { useState } from "react";

const Compelete = ({ isView }) => {
  const [isComplete, setIsComplete] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setIsComplete(value);
  };

  return (
    <>
      <div className="table-header">
        <h4>조사완료여부</h4>
      </div>
      <table className="table table-bordered">
        <tr>
          <th style={{ width: "150px" }}>조사완료여부</th>
          <td>
            {isView ? (
              <input
                className="form-control"
                onChange={onChange}
                value={isComplete}
              />
            ) : (
              isComplete
            )}
          </td>
        </tr>
      </table>
    </>
  );
};

export default Compelete;
