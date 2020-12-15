// 3번 문제
// 가장 많은 활동을 한 사람 순으로 정렬하여 배열을 반환하는 함수를 작성하라

const data = require('./data.js')


var ex3 = (data) => {
    data.sort(function(a,b) {
        return a.post_count > b.post_count ? -1 : 1;
    });
    return data
}

console.log(ex3(data))