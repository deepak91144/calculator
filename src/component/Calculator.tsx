import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  function addNumbers(userInput: string): number {
    setAddButtonClicked(true);
    if (userInput === "") {
      alert("string should not be empty");
      return 0;
    }
    const filteredInput = userInput.replace(/[^0-9]/g, " ");
    const stringAsArray = filteredInput.split(" ");
    const onlyNumbers = stringAsArray.filter((ele: string) => {
      return ele !== "";
    });

    let sum = 0;
    onlyNumbers.forEach((ele: string) => {
      sum = sum + parseInt(ele);
    });
    setUserInput("");
    return sum;
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <div className="container">
            <div>
              <input
                onChange={handleChange}
                placeholder="Type here..."
                value={userInput}
              />
            </div>
            <button
              onClick={() => {
                setTotalSum(addNumbers(userInput));
              }}
              className="addButton"
            >
              Add
            </button>
            <div className="totalSum">
              {addButtonClicked && `Sum is ${totalSum}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
