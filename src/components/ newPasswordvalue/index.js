import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const newPasswordvalue = async customerinfo => {
  try {
    const user = JSON.parse(await AsyncStorage.getItem('token'));
    let config = {headers: {Authorization: `Bearer ${user}`}};
    let response = await axios.patch(
      'http://34.212.54.70:3000/api/customers/change-password',
      customerinfo,
      config,
    );
    if (response.status == 200) {
      console.log('respone====>', response);
      return {status: true, data: response.data};
    } else {
      return {status: false};
    }
  } catch (err) {
    console.log(err);
    return {status: false};
  }
};

export default newPasswordvalue;
