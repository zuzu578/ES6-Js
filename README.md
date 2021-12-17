# ES6-Js / 그외 몰랐던 문법들 정리 
# Closure (클로저)

클로저란 내부에 선언된 함수가 외부함수의 지역변수를 사용할수있는 (접근할수있는것) 을 말한다.

클로저를 이용하여 전역변수를 줄일수 있고 , 비슷한형태의 코드를 , 재사용률을 높일 수 있다.

``` javascript

// 내부 함수가 외부함수의 지역변수에 접근할수있다.
function outerFnc(){
  let outerVar = 'outerVar';
  return function innerFnc(){
    console.log(outerVar);
    //return outerVar;
  }
}

let inner = outerFnc();
inner()
//console.log(inner())


```

화살표함수로 이렇게 바꿀수 있다.

``` javascript



const outerFnc = () => {
  let outerVar = 'outerVar';
  return innerFnc = () =>{
    console.log(outerVar);
  }
}

let inner = outerFnc();
inner();


```

# this 

this 가 가르키는 바는 일반적인 context 에서는 window 객체 ( global ) 을 가리킨다. 하지만 이 상황에서는 이야기가 달라진다. 
``` javascript 

let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    let self = this;
    console.log(this.myVar)   
 
    setTimeout(()=> {
      console.log(this.myVar)
    }, 1000)
  }
}
obj.myFunc() 


```
obj(객체안)에서 this 는 obj 를 가리키므로 , this.myVar 는 obj.myVar 를 가리킨다.

# Arrow functions 

화살표함수는 다음과 같은 표현식에서 대체할수있다. 단 arrow function 은 , context 에 따라 this 가 달라진다.

```javascript
//기존 function 선언방식 
function tempFnc(){

}
```

```javascript 
//arrow function 선언방식
()=>{

}
const myFnc = () => {

}

```

# Template Literals

템플릿 리터럴을 통해 문자열을 연결하기 위해 (+) 연산자를 사용할 필요없이 백틱(`) 을 통해 문자열 내에서 변수를 사용할수있다.

```javascript
let globalVaribale;

const myFnc = () =>{
  this.globalVaribale = 20;
  console.log(`number => ${this.globalVaribale}`)
}
myFnc()

```

# map 
map를 이용하여 여러개의 데이터를 순회할수있다.

``` javascript
const myArrary = [0,1,2,3,4,5];

let arr2 = myArrary.map((item) => {
  console.log(item)
});

```

# Default parameters

``` javascript 
const myFnc = (param1 , param2 = 22) => {
  return param1 + param2;
}

console.log(myFnc('test1'))

```

# 비구조화 할당 
``` javascript
// object 비 구조할당 
const temp1 = {
  key1:'value1',
  key2:'value2',
  key3:'value3',
};

let {key1 , key2 , key3} = temp1;

console.log(key1,key2,key3);
// array 비 구조할당 
const tempArr = [10,20,30];

let [val1,val2,val3] = tempArr
console.log(val1)


```

# 나머지 매개변수 
``` javascript 
const myFnc = (...args) =>{
  let sum = 0;
  const result = args.map((item) => {
  sum+=item
});
  return sum
}

console.log(myFnc(1,2,3))
// ...args 는 parameter들을받아서 배열로 만든다는 의미이다.
```

# Spread Operator 
특정 객체 , 배열값을 다른객체 , 배열로 복제하거나 옮길때 사용한다. 
```javascript
let obj = {
  a:10,
  b:20,
}
let newObj = {...obj};

console.log(newObj)

let arr = [1,2,3]

let newArr = [...arr];

console.log('newArr =>' , newArr)

```
# destructuring 
디스트럭쳐링이란 , 구조화된 배열이나 객체를 비구조화 하여 개별적인 변수에 할당하는 것이다. 

종류에는 두개가 있는데 하나는 배열 디스트럭처링 , 또하나는 객체 디스트럭처링이다. 
# Array destructuring (배열 디스트럭쳐링)

``` javascript
const arr = [1,2,3];

const [o,t,q] = arr;

console.log(o,t,q)

```

# Object destructuring (객체 디스트럭쳐링)

``` javascript
const obj ={
  key1:'1312',
  key2:'4444',
}


const {key1 , key2} = obj;

console.log(key1,key2)


const {p1,p2,p3 = '20'} = { p1 : 'ee',p2 : 'rrqq'};

console.log(p1,p2,p3)

const person = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

const { name , address: { city } } = person;

console.log(name , city);

```
# promise
기존 callback function 을 사용했을때 나타나는 단점을 보완하기 위해 promise 를 사용하여 이를 해결할수있다. 

``` javascript
const temp = () =>{
  return new Promise((resovle, reject) =>{ 
    resovle(20);
  })
}
temp()
.then((res)=>{
  return res + 1
})
.then((res)=>{
  return res + 1
})
.then((res)=>{
  return res + 1
})
.then((res)=>{
  return res + 1
})
.then((res)=>{
  return res + 1
})
.then((res)=>{
  console.log(res);
})

```
이렇게 비동기 작업을 한뒤 , then function 에서 그 후의 작업을 할수있다. , .then 을 이어나가서 진행하는 방식을 promise chainning 이라고 한다. 

# async await 
promise channing 코드를 간결하게,보완하기 위해서 사용한다.
``` javascript 

const asyncF = () =>{
  return new Promise((resolve, reject)=>{
    resolve(20);
  })
}


const tt = async() =>{
  let num = 0;
  let t = await asyncF();
  let t2 = t+40;
  console.log(t2)
} 
tt();

```

# class 
``` javascript 

class A {
  constructor(param1,param2){
    this.param1 = param1;
    this.param2 = param2;

  }
  methods(){
    console.log('methods');
    console.log(this.param1);
    console.log(this.param2);
    
  }
}

const a1 = new A(20,30);
a1.methods();

```
# String.includes()
해당 문자열이 포함되어있는지 확인 후 true 를 리턴한다.
```javascript 

let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true

```

# String.startsWith()
문자열이 어떤것으로 시작되는지 판별한다 
``` javascript 
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello")   // Returns true

```
# JavaScript Array.includes() 

배열 요소중 특정 요소엘레멘트가 있는지 확인하고 true / false 를 return 한다.
``` javascript 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango"))


```




