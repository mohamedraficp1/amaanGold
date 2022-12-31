import axios from 'axios';

  export async function getCurrencyRate() {
    try{
        const response = await axios.get('https://fcsapi.com/api-v3/forex/converter?symbol=USD/AED&amount=1&access_key=8prFf5vy6CjrqAH4l6HmaNG7')
        console.log('response ', response)
        return response.data;
    }catch(error) {
        return error;
    }
}