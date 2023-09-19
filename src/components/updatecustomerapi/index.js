import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UpdateCustomerapi = async cutomerinfo => {
  // console.log("customerinfo======<>>", cutomerinfo)
  try {
    const user = JSON.parse(await AsyncStorage.getItem('token'));
    let config = {headers: {Authorization: `Bearer ${user}`}};
    let response = await axios.patch(
      'http://34.212.54.70:3000/api/customers/update-customer/',
      cutomerinfo,
      config,
    );
    if (response?.status == 200) {
      console.log('respone====>', response);
      return {status: true, data: response.data};
    } else {
     
  
      return {status: false};
    }
  } catch (err) {
    console.log("===================1111111>",err);
  }
};

export default UpdateCustomerapi;
