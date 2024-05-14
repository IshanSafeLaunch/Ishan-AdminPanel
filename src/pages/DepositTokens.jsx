import React,{useState,useEffect} from 'react'
import DepositTableCard from '../components/depositTokens/DepositTableCard'
import DistributionCard from '../components/depositTokens/DistributionCard'
import Header from '../components/Header';
import supabase from "../config/supabaseClient";


const DepositTokens = () => {
    const [selectedDistribution, setSelectedDistribution] = useState(null);
    const [distributorOptions, setDistributorOptions] = useState([]);
    const [cardData, setCardData] = useState([])

    const handleDistributionChange = (event) => {
        //setSelectedDistribution(event.target.value);
        const selectedOption = event.target.value;
        setSelectedDistribution(selectedOption);


        const selectedDistributor = distributorOptions.find(option => option.project_name === selectedOption);
        if (selectedDistributor) {
            // Update cardData based on the selected distributor
            setCardData({
                title: selectedDistributor.project_name,
                distributionId: selectedDistributor.id,
                id: selectedDistributor.contract_address,
                fundraiseAmount: 10,
                NumTokensWithdrawn: 10,
                createdBy: selectedDistributor.project_owner,
                totalContributors: 10
            });
        }
      };


    useEffect(() => {
        fetchDistributors();
      }, []);
    
      const fetchDistributors = async () => {
        try {
          const { data, error } = await supabase.from('deals').select('*');
          if (error) {
            throw error;
          }
          console.log("DataBase", data);
          setDistributorOptions(data);
        } catch (error) {
          console.error('Error fetching distributor options:', error.message);
        }
      };
    

    // const cardData={
    //     title:'R Games',
    //     distributionId:'64',
    //     id:'0xcbd9f6d748Dd3d9uiuiub78657ftre5',
    //     fundraiseAmount:'44443',
    //     NumTokensWithdrawn:'655097.71428',
    //     createdBy:'0xcbd9f6d748Dd3d9uiuiub78657ftre5',
    //     totalContributors:89
    // }

    const depositData={
        total:666666,
        tableData:[
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
        ]
    }
//I have added dummy data but this data will come from apis. and then we can pass it down as props.
  return (
    <div><Header/>
    <div className='space-y-3'>
        <h1 className='font-bold text-3xl pt-2 sm:pt-0'>Distribute Tokens</h1>
        <div className='pb-3'>
            {/* <SelectInput label={'Select Distribution'} value ={selectedDistribution} /> */}
            <div>Select Distributor</div>
            <select className='select' style={{ border: '2px solid #000000;', width: '40%'}} value={selectedDistribution} onChange={handleDistributionChange}>
            <option value="">Select...</option>
            {distributorOptions.map((projects) => (
                <option key={projects.id} value={projects.project_name}>{projects.project_name}</option>
                
                ))}
            </select>
            
        </div>
        <DistributionCard data={cardData}/>
        <DepositTableCard data={depositData}/>
    </div>
    </div>
  )
}

export default DepositTokens