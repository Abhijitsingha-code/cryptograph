import React, {useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import Loader from './Loader'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList , isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))
    setCryptos(filteredData);

  },[cryptoList, searchTerm])
  
  if (isFetching) return <Loader/>

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
            <Input placeholder='Search CryptoCurrencies' onChange={(e)=>setSearchTerm(e.currentTarget.value.toLowerCase())}/>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto)=>(
            <Col xs={24} md={12} lg={6} key={crypto.uuid} className='crypto-card'>
                <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
                  <Card title={`${crypto.rank}. ${crypto.name}`}
                        extra={<img className='crypto-image' src={crypto.iconUrl}/>}
                        hoverable
                  >
                      <p>Price: {millify(crypto.price)}</p>
                      <p>Market Cap: {millify(crypto.marketCap)}</p>
                      <p>Daily Changes: {crypto.change}%</p>
                  </Card>
                </Link>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies