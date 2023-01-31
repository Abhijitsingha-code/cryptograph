import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2c5828ec99msh930f248050df259p1d3facjsn9374a6505fd7',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const BaseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: BaseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (uuid)=> createRequest(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ Id ,timePeriod })=> createRequest(`coin/${Id}/history?timePeriod=${timePeriod}`),
        }),
        getCryptoExchanges: builder.query({
            query: ()=> createRequest('/exchanges'),
        })
    })
});

export const {  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoExchangesQuery } = cryptoApi;
