const request = require('request-promise');


async function main() {
    const data = await request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question');  //json
    const info = JSON.parse(data);
    console.log(info);

    const key = info.key.toString();
    // const json_result = await request('https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/answer?key='+key);
    cont {key} = JSON.paerse(data);
    const data_2 = await request(`'https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/answer?key=${key}`);
    const result = JSON.parse(json_result);
    console.log(result);

}

main();
