
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import { ethers } from 'ethers';



// const Headers = ({}) => {
//   const [accounts, setAccounts] = useState(null);

//   async function requestAccount() {
//     if (!window.ethereum) {
//       console.log("Install Metamask");
//     } else {
//       try {
//             const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//             console.log(accounts);
//             setAccounts(accounts[0]); // Assuming you want to display the first connected account

//             // const provider = new ethers.providers.Web3Provider(window.ethereum);
//             //Get the signer (account) from the provider
//             // const signer = provider.getSigner();

//             // // Get the Ethereum address of the signer
//             // const accounts = await signer.getAddress();
//             // setAccounts(accounts[0])
          
//       } catch (error) {
//         console.log(error);
//       }
//         console.log("detected");
//     }
//   }

//   return (
//     <div>
//       <Sidebar />
//       <div className="header" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         <header className="header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
//           <h3 className="presale-heading" style={{ textAlign: 'left', fontWeight: 'bold', margin: 0 }}>Presale</h3>
//           {!accounts && <button className="connect-button" style={{ backgroundColor: 'lightblue', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={requestAccount}>Connect Metamask</button>}
//           {accounts && <h3>Wallet address: {accounts}</h3>}
//         </header>
//       </div>
//     </div>
//   );
// }

// export default Headers;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UploadForm from './Uploadform';
// import UpploadForm from '../pages/uploadform';
const Headers = () => {
  const [accounts, setAccounts] = useState(null);

  async function requestAccount() {
    if (!window.ethereum) {
      console.log("Install Metamask");
    } else {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(accounts);
        setAccounts(accounts[0]); // Assuming you want to display the first connected account
      } catch (error) {
        console.log(error);
      }
      console.log("detected");
    }
  }

  return (
    <div>
      <Sidebar />
      <div className="header" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <header className="header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
          <h3 className="presale-heading" style={{ textAlign: 'left', fontWeight: 'bold', margin: 0 }}>Presale</h3>
          {!accounts && <button className="connect-button" style={{ backgroundColor: 'lightblue', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={requestAccount}>Connect Metamask</button>}
          {accounts && <h3>Wallet address: {accounts}</h3>}
        </header>
      </div>
      <UploadForm accounts={accounts} />
      {/* <UpploadForm accounts={accounts} /> */}
    </div>
  );
}

export default Headers;

