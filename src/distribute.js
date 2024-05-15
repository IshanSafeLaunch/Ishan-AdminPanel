const  Web3 = require('web3');
const fs = require('fs');

require('dotenv').config();

const vestingContractAddress = '0xD7F8C11Fa9B3C7305A1d55cC60e8A7E985b1b9E6';
const stableCoinAddress = '0xFCF119b385dEA8718Bfd9AA5B4566F8481531a11';

const jsonFile = '../admindashboard/src/abi/vesting-abi.json';
const parsed = JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
const vestingABI = parsed.abi;
//console.log('ABI',vestingABI);

const chainId = 97;

const rpc = 'https://endpoints.omniatech.io/v1/bsc/testnet/public';
const web3 = new Web3(rpc);


const contract = new web3.eth.Contract(vestingABI, vestingContractAddress);

const opk = process.env.ADMINPRIVATE_KEY;
const OwnerADDR = process.env.ADMIN_ADDRESS;




const removeToken = async(_distributionId, _amount) => {
  try {
  let txObj = contract.methods.withdraw(_distributionId,_amount);
  const gas = await txObj.estimateGas({from:OwnerADDR});
  const gasPrice = web3.eth.getGasPrice();
  const data = txObj.encodeABI();

  const txn = {
    to: vestingContractAddress,
    data,
    gas,
    gasPrice,
  };


  const sign = await web3.eth.accounts.signTransaction(txn, opk);
  const receipt = await web3.eth.sendSignedTransaction(sign.rawTransaction);
  console.log(receipt);
} catch (err) {
  console.log('remove token err ' + err);
}
}

//removeToken(1,'0x2637983F03c6C242edEE34D6b7a5e47358A4B058');

const create = async(_name,_tokenAddress,_contributors,_amounts) => {
    try {
    let txObj = contract.methods.create(_name,_tokenAddress,_contributors,_amounts);
    const gas = await txObj.estimateGas({from:OwnerADDR});
    const gasPrice = web3.eth.getGasPrice();
    const data = txObj.encodeABI();
  
    const txn = {
      to: vestingContractAddress,
      data,
      gas,
      gasPrice, 
    };
  
  
    const sign = await web3.eth.accounts.signTransaction(txn, opk);
    const receipt = await web3.eth.sendSignedTransaction(sign.rawTransaction);
    console.log('Hello here we are creating', receipt);
    return({receipt});
  } catch (err) {
    console.log('Creating err ' + err);
  }
  }
  


const addingContributors = async(_distributionId,_contributors,_amounts) => {
  try {
  let txObj = contract.methods.addContributors(_distributionId,_contributors,_amounts);
  const gas = await txObj.estimateGas({from:OwnerADDR});
  const gasPrice = web3.eth.getGasPrice();
  const data = txObj.encodeABI();

  const txn = {
    to: vestingContractAddress,
    data,
    gas,
    gasPrice, 
  };


  const sign = await web3.eth.accounts.signTransaction(txn, opk);
  const receipt = await web3.eth.sendSignedTransaction(sign.rawTransaction);
  console.log('Hello here we are adding contributors', receipt);
  return({receipt});
} catch (err) {
  console.log('update Contributors err ' + err);
}
}

//addingContributors(1,array,amount2);


const undoDeposit = async(_distributionId,_depositIndex) => {
    try {
    let txObj = contract.methods.undoDeposit(_distributionId,_depositIndex);
    const gas = await txObj.estimateGas({from:OwnerADDR});
    const gasPrice = web3.eth.getGasPrice();
    const data = txObj.encodeABI();
  
    const txn = {
      to: vestingContractAddress,
      data,
      gas,
      gasPrice, 
    };
  
  
    const sign = await web3.eth.accounts.signTransaction(txn, opk);
    const receipt = await web3.eth.sendSignedTransaction(sign.rawTransaction);
    console.log('Hello here we are undoing deposits', receipt);
    return({receipt});
  } catch (err) {
    console.log('undoing Deposit err ' + err);
  }
  }

  //undoDeposit(1,10);

const totalDeposited = async(_distributonId)=>{
  const details = await contract.methods.totalDeposited(_distributonId).call();
  console.log("Checking totalDeposit",details);
  return details;
}
totalDeposited(1);


const getContributors = async(_id)=>{
  const details = await contract.methods.getContributors(_id).call();
  console.log(JSON.stringify(details), 'get contributors ');
  return details;
}

//getContributors(1);






module.exports = {
  create,
  removeToken,
  addingContributors,
  getContributors,
  totalDeposited,
  undoDeposit   
}
// // apps-fileview.texmex_20230921.01_p3
// // private.txt
// // Displaying private.txt.