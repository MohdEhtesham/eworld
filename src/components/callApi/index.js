import react from 'react';

const CallApi = (uri, body) => {
  if (!body) {
    fetch(uri)
      .then(data => data.json())
      .then(res => console.log('response1=>', res))
      .catch(err => console.log('err', err));
  } else {
    fetch(uri, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(res => console.log('response2=>', res))
      .catch(err => console.log('err', err));
  }
};
export default CallApi;
