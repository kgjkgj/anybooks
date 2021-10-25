import Local from '../Local/Home'
import axios from 'axios'


export default async function APIBlog(pages){
    if(pages === undefined || pages === " " || isNaN(pages)){
        pages = 1;
    }
    const data = await axios.get(`${Local()}/blog?_page=${pages}`)
    return data.data
}

export const keyBlog = async () =>{
    try{
        const data  = await axios.get(`${Local()}/blog/key-blog`)
        return data.data
    }
    catch(e){console.error(e)}
}


export const Content  = async ( slug ) =>{
    try{
        const data = await axios.get(`${Local()}/blog/content/${slug}`)
        return data.data
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data =  await axios.get(`${Local()}/blog/length`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const TopViewBlog = async ()=>{
    try{
        const data =  await axios.get(`${Local()}/blog/top-views`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const Random = async () =>{
    try{
        const data =  await axios.get(`${Local()}/blog/random`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const toAdd = (data) => axios.post(`${Local()}/blog/to-add`,data)