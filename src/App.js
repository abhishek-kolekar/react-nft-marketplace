import './App.css';
import Header from './components/header'
import CollectionCard from './components/CollectionCard'
import React, { useEffect, useState}  from 'react' 
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([0])
  const [selectedPunk, setSelectedPunk] = useState(1)

  useEffect(() => {
    const getMyNfts = async() => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x2855c2774a5b9700b1AAc7610A0d8C7915502502&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts() 
  }, [])

  return (
    <div className='app'>
    <Header/>
    <CollectionCard />
    {punkListData.length > 0 && (
      <>
        <Main punkListData={punkListData} 
              selectedPunk={selectedPunk} />
        <Punklist 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk}  />
     </>
    )}
    </div>
  )
}

export default App;
