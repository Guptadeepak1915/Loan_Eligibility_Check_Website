import { useState } from "react";
import "./App.css";
const App = () => {
  const [accno, setAccno] = useState("");
  const [accbal, setAccbal] = useState("");
  const [salary, setSalary] = useState("");
  const [loantype, setLoantype] = useState("");
  const [expectedloanamt, setexpectedloanamt] = useState("");
  const [expectednoofemi, setexpectednoofemi] = useState("");
  const [result, setResult] = useState("");
  function check(e) {
    e.preventDefault();
    let eligibleLoanAmount = 0;
    let eligibleEMI = 0;
    if (
      !accno ||
      !accbal ||
      !salary ||
      !loantype ||
      !expectedloanamt ||
      !expectednoofemi
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (Number(accno) < 1000 || Number(accno) > 1999) {
      alert("Invalid account number");
      return;
    } else if (Number(accbal) < 1000) {
      alert("Insufficient account balance");
      return;
    } else {
      // Determine eligibility
      if (Number(salary) > 25000 && loantype.trim().toUpperCase() === "CAR") {
        eligibleLoanAmount = 500000;
        eligibleEMI = 36;
      } else if (
        Number(salary) > 50000 &&
        loantype.trim().toUpperCase() === "HOUSE"
      ) {
        eligibleLoanAmount = 6000000;
        eligibleEMI = 60;
      } else if (
        Number(salary) > 75000 &&
        loantype.trim().toUpperCase() === "BUSINESS"
      ) {
        eligibleLoanAmount = 7500000;
        eligibleEMI = 84;
      } else {
        alert("The customer is not eligible for the loan");
        return;
      }

      if (
        Number(expectedloanamt) <= eligibleLoanAmount &&
        Number(expectednoofemi) <= eligibleEMI
      ) {
        setResult(`
          You are eligible for the loan\n
        Account Number: ${accno}\n
        Eligible Loan Amount: ${eligibleLoanAmount}\n
        Requested Loan Amount: ${expectedloanamt}\n
        Eligible EMI: ${eligibleEMI}\n
        Requested EMI: ${expectednoofemi}
          `);
      } else {
        alert("The customer is not eligible for the loan");
      }
    }
  }
  return (
    <div>
      <div>
        <p>
  <b>Note:</b> Loan eligibility bank policies, credit score,
  account balance, and salary criteria ke anusaar badal sakti hai.
</p>
        <table className="loan-table" border="1" cellPadding="10" cellSpacing="0">
  <thead>
    <tr>
      <th>Salary</th>
      <th>Loan Type</th>
      <th>Eligible Loan Amount</th>
      <th>Maximum EMI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&gt; 25000</td>
      <td>Car</td>
      <td>500000</td>
      <td>36</td>
    </tr>
    <tr>
      <td>&gt; 50000</td>
      <td>House</td>
      <td>6000000</td>
      <td>60</td>
    </tr>
    <tr>
      <td>&gt; 75000</td>
      <td>Business</td>
      <td>7500000</td>
      <td>84</td>
    </tr>
  </tbody>
</table>
      </div>
      <div className="container">
        <h1>Loan Eligibility Check</h1>
        <input
          className="input-box"
          type="number"
          placeholder="Enter The Account Number"
          name="accno"
          id="accno"
          value={accno}
          onChange={(e) => setAccno(e.target.value)}
          size={30}
        />
        <br />
        <input
          className="input-box"
          type="number"
          placeholder="Enter The Account Balance"
          name="accbal"
          id="accbal"
          value={accbal}
          onChange={(e) => setAccbal(e.target.value)}
          size={35}
        />
        <br />
        <input
          className="input-box"
          type="number"
          placeholder="Enter The Salary"
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          size={35}
        />
        <br />
        <input
          className="input-box"
          type="text"
          placeholder="Enter The Loan Type"
          name="loantype"
          id="loantype"
          value={loantype}
          onChange={(e) => setLoantype(e.target.value)}
          size={20}
        />
        <br />
        <input
          className="input-box"
          type="number"
          placeholder="Enter The Expected Loan Amount"
          name="eloanamt"
          id="eloanamt"
          value={expectedloanamt}
          onChange={(e) => setexpectedloanamt(e.target.value)}
          size={35}
        />
        <br />
        <input
          className="input-box"
          type="number"
          placeholder="Enter The Expected Number of EMI"
          name="enoemi"
          id="enoemi"
          value={expectednoofemi}
          onChange={(e) => setexpectednoofemi(e.target.value)}
          size={35}
        />
        <br />
        <button className="btn" onClick={check}>
          Check Eligibility
        </button>
        <div className="result" id="result">
          <pre>{result}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
