import Local from '../Local/Home'
import axios from 'axios'


export const topCreatedAtTopics = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/topics/top-createdAt`)
        return data.data
    }
    catch(e){console.error(e)}
}

export const topViewsTopics = async () =>{
    try{
        const data =  await axios.get(`${Local()}/topics/top-views`)
        return data.data
    }
    catch(e){console.error(e)}
}

export const Search = async (query)=>{
    try{
        const data = await axios.get(`${Local()}/topics/search?s=${query}`)
        return data.data;
    }
    catch(e){console.error(e)}
}
