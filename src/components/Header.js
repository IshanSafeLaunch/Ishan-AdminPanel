// import React, { useState } from 'react';
// import UploadForm from './Uploadform';
// const Sidebar = () => {
//   return (
//       <div className="sidebar" style={{ boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.1)', height: 'calc(100vh - 60px)', width: '200px', backgroundColor: '#f0f0f0', position: 'fixed', top: '60px', left: 0 }}>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//               <li style={{ padding: '10px 20px', borderBottom: '1px solid #ccc' }}>
//                   <a href="#distribution" style={{ textDecoration: 'none', color: '#333' }}>Distribution</a>
//               </li>
//               <li style={{ padding: '10px 20px' }}>
//                   <a href="#deposit-token" style={{ textDecoration: 'none', color: '#333' }}>Deposit Token</a>
//               </li>
//           </ul>
//       </div>
//   );
// }


// const Headers = () => {
//     const [accounts, setAccounts] = useState(null);

//     async function requestAccount() {
//         if (!window.ethereum) {
//             console.log("Install Metamask");
//         } else {
//             console.log("detected");
//             try {
//                 const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//                 console.log(accounts);
//                 setAccounts(accounts[0]); // Assuming you want to display the first connected account
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     return (
//         <div>
//             <Sidebar />
//             <div className="header" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
//             <header className="header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
//                 <h3 className="presale-heading" style={{ textAlign: 'left', fontWeight: 'bold', margin: 0 }}>Presale</h3>
//                 {!accounts && <button className="connect-button" style={{ backgroundColor: 'lightblue', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={requestAccount}>Connect Metamask</button>}
//                 {accounts && <h3>Wallet address: {accounts}</h3>}
//             </header>
            
//         </div>
//         <UploadForm/>
//         </div>
//     );
// }

// export default Headers;

import React, { useState } from 'react';
import UploadForm from './Uploadform';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.1)', height: 'calc(100vh - 60px)', width: '200px', backgroundColor: '#f0f0f0', position: 'fixed', top: '60px', left: 0 }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ padding: '10px 20px', borderBottom: '1px solid #ccc' }}>
          <a href="#distribution" style={{ textDecoration: 'none', color: '#333' }}>Create Distribution</a>
        </li>
        <li style={{ padding: '10px 20px' }}>
          <a href="#deposit-token" style={{ textDecoration: 'none', color: '#333' }}>Deposit Token</a>
        </li>
      </ul>
    </div>
  );
}

const Headers = () => {
  const [accounts, setAccounts] = useState(null);

  async function requestAccount() {
    if (!window.ethereum) {
      console.log("Install Metamask");
    } else {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(accounts);
        setAccounts(accounts[0]); // Assuming you want to display the first connected account
      } catch (error) {
        console.log(error);
      }
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
      <UploadForm />
    </div>
  );
}

export default Headers;
