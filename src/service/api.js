import axios from "axios";

export const host = "https://jumpsuit-scorpion.cyclic.app/"
export const localhost = "http://localhost:8000"

export const AllCommodities = `${host}/allCommodities`
export const DeleteCommodity =(id)=>{
  return  `${host}/deleteCommodity/${id}`    
} 

export const addCommodity = async (token,datas) => {
  try {
    const { data } = await axios.post(
      `${host}/addCommodity`,datas,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const editCommodity = async (token,datas,id) => {
  try {
    const { data } = await axios.put(
      `${host}/editCommodity/${id}`,datas,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const allUsers = async (token) => {
  try {
   const { data } = await axios.get( `${host}/allUsers`,
        {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return data
 } catch (error) {
    return error.response.data.message;
  }
};


export const deleteUser=async(id,token)=>{
  try {
      const {data}=await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}}`,
      {
          headers:{
              Authorization:`Bearer ${token}`,
          },
      })
  }catch(error){
      return error.response.data.message;
  }
}

export const editSpred = async (token,datas,type,metal) => {
  try {
    const { data } = await axios.post(
      `${host}/add${type}${metal}Spread`,datas,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
    
  }
};

export const allSpreads = async () => {
  try {
   const { data } = await axios.get(`${host}/getSpread`);
    return data
 } catch (error) {
    return error.response.data.message;
  }
};

export const LoginApi = async (info) => {
  try {
    const { data } = await axios.post(
      `${host}/login`,info);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message)
    throw error?.response?.data?.message;
    
  }
};

