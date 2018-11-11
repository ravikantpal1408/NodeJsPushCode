const FCM = require('fcm-node');
// Replace these with your own values.
const apiKey = 'AAAA_Py0_6s:APA91bHPQj4OpH7mx5uMi9HBmCyAregtiIt5c5G1NnrHNunsAjyqd6T1OY4F3PlnGqGe5hFiJLCKFY-UWMTrZ9fKsMc-n8OWf2IYkYT4WGYjtMBJrOQR83-A4Uvp3Y1jEF-iUpEEXMYY';
const deviceID = "e7IeG3ZU-dc:APA91bGlbuDysIb7Rq0Xig1ahOFuogRNe6MKQvMumUQ36DkVJAZg5zwKakC7LJp0uUPDYET1WiNfmzxhViLr7eyLzAAxpwjmP4f_wKB_6CFeHiAvDtqj65-9y9Z-4dMp2HPELFS8Ur0a";
const fcm = new FCM(apiKey);

const message = {
    to: deviceID,
    data: {
        title: 'New Notification',
        message: 'hsdjkhfkjshdkjfhsjkdhfkjshdfjkhskjdhfjkhskdhkfjhksdhfh',
        'force-start': '1'
    }
};

fcm.send(message, (err, response) => {
    if (err) {
        console.log(err);
        console.log('Something has gone wrong!');
    } else {
        console.log('Successfully sent with response: ', response);
    }
});