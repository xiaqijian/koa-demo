async function fun () {
    console.log(1)
    await fun1()
    console.log(5)
}

async function fun1 () {
    console.log(4)
}

console.log(2)

fun()

console.log(3)


async function async1(){
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}

async function async2(){
	console.log('async2')
}
console.log('script start')
setTimeout(function(){
	console.log('setTimeout') 
},0)  
async1(); 
new Promise(function(resolve){
	console.log('promise1')
	resolve();
}).then(function(){
	console.log('promise2')
})
console.log('script end')

// async1 start
// async2
// async1 end