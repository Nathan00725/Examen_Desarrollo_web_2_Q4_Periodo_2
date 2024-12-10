import axios from 'axios'


export const getCategoryCode = async ()=>{

    const response = await axios.get('http://localhost:5000/AVG_categoryCode');
    return response.data

}


export const getCount_brandCode = async ()=>{

    const response = await axios.get('http://localhost:5000/count_brandCode');
    return response.data

}

export const getsumar_categoryCod = async ()=>{

    const response = await axios.get('http://localhost:5000/sumar_categoryCode');
    return response.data

}
