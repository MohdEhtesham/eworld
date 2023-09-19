import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const   Customeraddfeedbackapi = async (customerinfo, toggleCheckBox) => {
  // console.log("hellooo=>", toggleCheckBox)
  try {
  const user = JSON.parse(await AsyncStorage.getItem('token'));
  let config = {headers: {Authorization: `Bearer ${user}`}};
  // console.log(config)
  // console.log(customerinfo)
  if (toggleCheckBox == true) {
    let response = await axios.post(
      'http://34.212.54.70:3000/api/feedbacks/anonymous',
      customerinfo,
      config,
    );
    console.log('response==>', response.data);
    return {status: true, data: response.data};
  } else {
    let response = await axios.post(
      'http://34.212.54.70:3000/api/feedbacks/add-new',
      customerinfo,
      config,
    );
    console.log('response==>', response.data);
    return {status: true, data: response.data};
  }

  } catch (err) {
   
    
    return {status: false};
  }
};

export default Customeraddfeedbackapi;
