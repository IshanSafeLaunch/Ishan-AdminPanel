import React, { useState } from 'react';
import Web3 from 'web3';
const TokenDistributorContract =
// import abi from '../abi';
// Replace 'YourContractAddress' with your actual contract address
const contractAddress = '0xD7F8C11Fa9B3C7305A1d55cC60e8A7E985b1b9E6';

function UploadForm() {
  const [name, setName] = useState('');
  const [distributionToken, setDistributionToken] = useState('');
  const [contributors, setContributors] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const handleCreate = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(TokenDistributorContract, contractAddress);

    try {
      await contract.methods.create(name, distributionToken, contributors, amounts).send({ from: "eth_requestAccounts" });
      alert('Distribution created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create distribution.');
    }
  };

  const handleAddContributor = () => {
    // Add contributor address and amount to arrays
    setContributors([...contributors, '']);
    setAmounts([...amounts, 0]);
  };

  const handleContributorChange = (index, event) => {
    const updatedContributors = [...contributors];
    updatedContributors[index] = event.target.value;
    setContributors(updatedContributors);
  };

  const handleAmountChange = (index, event) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = event.target.value;
    setAmounts(updatedAmounts);
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Distribution Token:</label>
      <input type="text" value={distributionToken} onChange={(e) => setDistributionToken(e.target.value)} />
      <br />
      <button onClick={handleAddContributor}>Add Contributor</button>
      <br />
      {contributors.map((contributor, index) => (
        <div key={index}>
          <label>Contributor Address:</label>
          <input type="text" value={contributors[index]} onChange={(e) => handleContributorChange(index, e)} />
          <br />
          <label>Amount:</label>
          <input type="number" value={amounts[index]} onChange={(e) => handleAmountChange(index, e)} />
          <br />
        </div>
      ))}
      <button onClick={handleCreate}>Create Distribution</button>
    </div>
  );
}

export default UploadForm;

