// 2번 문제
// 최근에 로그인한 사람들 순으로 정렬하여 배열을 반환하는 함수를 작성하라

const data = require('./data.js')

// data.sort(function(a,b) {
//     return a.last_logged_in < b.last_logged_in ? -1 : 1;
// });

// console.log(data)

var ex2 = (data) => {
    data.sort(function(a,b) {
        return a.last_logged_in > b.last_logged_in ? -1 : 1;
    });
    return data
}

console.log(ex2(data))