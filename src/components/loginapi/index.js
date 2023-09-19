import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Loginapi = async customerinfo => {
  try {
    let response = await axios.post(
      'http://34.212.54.70:3000/api/customers/login',
      customerinfo,
    );

    //api-8p1l.onrender.com/api/feedbacks/add-new
    // .then((response) => {
    //     console.log("hello", response.status)
    //     const statusCode = response.status;

    // }).catch((err) => {
    //     console.log("error=====",err)
    //     return ({ status: false })
    // });
    https: if (response.status == 200) {
      storeUser(response.data);
      console.log('respone====>', response);
      return {status: true, data: response.data};
    } else {
      return {status: false};
    }
  } catch (err) {
    console.log('eror',err);
    if(err?.response?.status==400){
      return {Status: 400, data : err?.response?.data?.message}
    }else{
    return {status: false};
    }
  }
};

const storeUser = async userdetails => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userdetails));
    await AsyncStorage.setItem('token', JSON.stringify(userdetails.token));
    await AsyncStorage.setItem('Password', JSON.stringify(userdetails.token));

  } catch (error) {
    console.log(error);
  }
};
export default Loginapi;
