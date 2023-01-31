import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const cryptoNewsHeaders ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2c5828ec99msh930f248050df259p1d3facjsn9374a6505fd7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const BaseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest= (url) => ({url, headers: cryptoNewsHeaders});


export const cryptoNews = createApi({
    reducerPath : 'cryptoNews',
    baseQuery : fetchBaseQuery({ baseUrl : BaseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNews;