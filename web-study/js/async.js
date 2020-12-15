function delay() {
	setTimeout(() => {
		console.log('2nd');
	}, 3000);
}

console.log('1st');

delay();

console.log('3rd');

// 1st -> 3rd -> 2nd

// want : 1st -> 2nd -> 3rd 
// 1 : callback
function delay(callback) {
	setTimeout(() => {
		console.log('2nd');
		callback();
	}, 3000);
}

console.log('1st');

delay(() => {
	console.log('3rd');
})

// 2 : promise ****
function delay() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2nd');
			resolve('aaa');
		}, 3000);
	});
}

console.log('1st');

delay().then((data) => {  //promise.then() : promise Rmxskrh tlfgod // resolve() skdhkdigka
    console.log(data)
	console.log('3rd');
});


// 3 : async await
async function main() {
    try {
        function delay() {
            return new Promise((resolve, reject) => {
                try {
                    const data = await servercall();
                    resolve(data);

                } catch (err) {
                    reject(err);
                }
                
            })
        }
        
        console.log('1st');
        
        throw {code: 403};
                
        console.log('3rd');

    } catch(err) {
        switch(err.code) {
            case 404:
                console.log('404 error');
                break;
        }
    }

}

main();