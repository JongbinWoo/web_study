const request = require('request-promise');


async function main() {
    const promise_array = [
        request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question'),
        request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question'),
        request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question'),
        request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question')

    ];

    console.log('start');

    // promise_array.forEach((element) => {
    //     await element;
    // })  fail..

    await Promise.all(promise_array);

    console.log('end');

}

main();
