// @ts-check
// 1번 문제
// 유저가 이메일과 비밀번호를 입력받았을 때, 계정이 존재할 경우와 없을 경우를 구분하여 다음과 같은 결과값을 반환하는 함수를 작성하라

// {
//     success: boolean, // true: ok, false: fail
//     name: string,
//     email: string,
// }
  
const data = require('./data.js')


function ex1 (email, password) {
    // data.forEach((element) => {
    //     var result = {
    //         success : true,
    //         name: element.name,
    //         email: element.email,

    //     };
    //     if ((element.email == email) && (element.password == password)) {
    //         console.log(element.name);
    //         return result;
    //     }else {
    //         return {
    //             success: false,
    //             name: element.name,
    //             email: element.email,
    //         }
    //     }
    // })
    var result = {
        success : true,
        name: '',
        email: '',
    }

    var obj = data.find(item => {
        if ((item.email === email) &&(item.password === password))  {
            result.success = true;
            result.name = item.name;
            result.email = email;
            return result;
        }
        else {
            result.success = false;
            return result;
        }
    });

    

    
    // for (let i = 0 ; i < 9 ; i++) {
    //     if ((data[i].email == email) && (data[i].password == password)) {
    //         result.success = true;
    //         result.name = data[i].name;
    //         result.email = email;
    //         break;
    //     } else {
            
    //         result.success = false;
            
    //     }
    // }

    return obj;
    
}

const result = ex1('101@knu.ac.kr','157823')
console.log(result)