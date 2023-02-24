const sendSingleDeviceNotification = data => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'key=AAAADA5UgF4:APA91bE3QDo--AdqHYPa9HHtmYvuVxahKc9ZDOmEWl-J61KHijfMukM4-vEnDFcyA3aoq7Kx_58cJpAM51D206nM-tinajyaNMJnD8GQliDjVDQmmQDJIDBV78-RJqb2db44lqtbMN2X',
    );
  
    var raw = JSON.stringify({
      data: {},
      notification: {
        body: data.body,
        title: data.title,
      },
      to: data.token,
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  
//   const sendMultiDeviceNotification = data => {
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
//     myHeaders.append(
//       'Authorization',
//       'key=AAAAdXKbdFU:APA91bFAnuOqZdnGFovDEPSpxwarZz5gpcJ7BAWv15DU_8p4CsKaqTU_DS2WA2n_WTaW8g9LpIksfnyM1th4nuC2ziX45zunMOUTwKVODQR24_GQCA5mV_m50BWHNmVjdwA-5dzk5Bi4',
//     );
  
//     var raw = JSON.stringify({
//       data: {},
//       notification: {
//         body: data.body,
//         title: data.title,
//       },
//       registration_ids: data.token,
//     });
  
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };
  
//     fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   };
  
//   export default {
//     sendSingleDeviceNotification,
//     sendMultiDeviceNotification,
//   };