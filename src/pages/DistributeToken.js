import React, { useState } from 'react';

const TokenDistribution = () => {
  // State to manage selected distribution
  const [selectedDistribution, setSelectedDistribution] = useState(null);
  // State to manage deposit details
  const [deposits, setDeposits] = useState([]);

  // Function to handle distribution selection
  const handleDistributionChange = (event) => {
    setSelectedDistribution(event.target.value);
    // Fetch deposit details for the selected distribution and set it in the 'deposits' state
    // You would typically fetch this data from an API endpoint
  };

  // Function to handle token removal
  const removeToken = (depositId) => {
    // Logic to remove token based on deposit ID
  };

  // Render deposit details
  const renderDepositDetails = () => {
    return deposits.map((deposit) => (
      <div key={deposit.depositId}>
        <div>
          {/* Details at the left side */}
          <div>Fundraise Amount: {deposit.fundraiseAmount}</div>
          <div>No of Token Withdrawal: {deposit.numTokenWithdrawal}</div>
          <div>Created By: {deposit.createdBy}</div>
        </div>
        {/* Details at the center */}
        <div style={{ textAlign: 'center' }}>
          <div>Name: {deposit.name}</div>
          <div>Distribution ID: {deposit.distributionId}</div>
          <div>Ethereum Address: {deposit.ethereumAddress}</div>
        </div>
        {/* Remove token button */}
        <button onClick={() => removeToken(deposit.depositId)}>Remove Token</button>
      </div>
    ));
  };

  return (
    <div>
      <h2>Distribute Tokens</h2>
      <header>
        <div>Tokens Name</div>
        <select value={selectedDistribution} onChange={handleDistributionChange}>
          {/* Options for distribution dropdown */}
        </select>
      </header>
      <div>
        {/* Display deposit details */}
        {renderDepositDetails()}
      </div>
      {/* New div for deposit details */}
      <div>
        <h3>Deposit Details</h3>
        {/* Input fields for amount and unlock date time */}
      </div>
    </div>
  );
};

export default TokenDistribution;
