import Local from '../Local/Home'
import axios from 'axios'



export const ShowIntroductions = async () =>{
  try{
    const data  = await axios.get(`${Local()}/introductions`);
    return data.data;
  }
  catch(e){console.error(e)}
}


export const toAdd = async (data) =>{
    try{
      const datas =   await axios.post(`${Local()}/introductions/to-add`,data)
      return datas.data;
    }
    catch(e){console.log(e)}
}