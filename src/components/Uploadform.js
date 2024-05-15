

// import React, { useState } from 'react';

// const UploadForm = () => {
//   const [contributors, setContributors] = useState('');
//   const [distributionName, setDistributionName] = useState('');
//   const [distributionTokenAddress, setDistributionTokenAddress] = useState('');
//   const [numberPerBatch, setNumberPerBatch] = useState('');

//   const handleUpload = () => {
//     // Logic to upload the data to the contract
//     console.log('Uploading data to contract...');
//     console.log('Paste Contributors:', contributors);
//     console.log('Distribution Name:', distributionName);
//     console.log('Distribution Token Address:', distributionTokenAddress);
//     console.log('Number Per Batch:', numberPerBatch);
//     // You can call contract methods or perform other actions here
//   };

//   return (
//     <div>
//       <div style={{ display: 'inline-block' }}>
//         <h2>Paste Contributors</h2>
//         <textarea
//           value={contributors}
//           onChange={(e) => setContributors(e.target.value)}
//           placeholder="Enter contributors' addresses separated by commas"
//           rows={8}
//           cols={50}
//         />
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: '50px' }}>
//         <h2>Distribution Details</h2>
//         <div>
//           <label style={{ marginRight: '10px' }}>
//             Distribution Name:
//             <br/>
//             <input
//               type="text"
//               value={distributionName}
//               onChange={(e) => setDistributionName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div>
//           <label style={{ marginRight: '10px' }}>
//             Distribution Token Address:
//             <br/>
//             <input
//               type="text"
//               value={distributionTokenAddress}
//               onChange={(e) => setDistributionTokenAddress(e.target.value)}
//             />
//           </label>
//         </div>
//         <div>
//           <label style={{ marginRight: '10px' }}>
//             Number Per Batch:
//             <br/>
//             <input
//               type="text"
//               value={numberPerBatch}
//               onChange={(e) => setNumberPerBatch(e.target.value)}
//             />
//           </label>
//         </div>
//       </div>
//       <div>
//       <button style={{ backgroundColor: 'lightblue', marginTop: '20px', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleUpload}>Create</button>
//       </div>
//     </div>
//   );
// };

// export default UploadForm;

