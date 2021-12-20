# ES6-Js / 그외 몰랐던 문법들 정리 

# 문자열에서 띄어쓰기하기 (문자열에 공백을 추가하기 (만약) )

예를들어 두개 문자 hello,world 가 있는데 이 두개 사이에 공백을 추가해서 hello world 로 하고싶다면
 ```javascript
let str1 = '문자열1';
let str2 = '문자열2';
let last = ','
str1 = str1.concat(last).concat(str2).split(',').join(' ');

console.log(str1)
 
  ```
  
# padStart
``` javascript
//padstart로 휴대폰번호 마스킹하기

 const solution = (phone_number) => {
    // String.prototype.padStart() 사용
    const last4Digits = phone_number.slice(-4);
    const maskedNumber = last4Digits.padStart(phone_number.length, '*');
  
    return maskedNumber;
}



```
# Json 값만 배열로 추출하기

``` javascript

const arr1 = {value1 : 13 ,value2 : 12 , value3 : 14 , value4 : 15}
let temp = Object.values(arr1);


console.log(temp)


```
# shift , unshift

배열의 맨앞에 요소를 추가할때는 unshift , 삭제는 shift 할때 사용한다.

stack 구조 (Last in first out) 으로 동작하기 때문에 stack 을 구현할 경우 , shift , unshift를 사용하도록 한다

```javascript

const arr = [];
arr.unshift('a');
arr.unshift('b');
arr.unshift('c');


```
# find 

find() 를 사용하여 배열을 순환하다 , 파라미터로 넘긴 함수의 조건을 만족하는 요소가 발견되면 조건에 해당하는 요소를 반환하고 즉시 종료한다.
이때 반환값은 하나를 반환한다 즉, find()를 통해 , 조건을 찾게되면 순환문이 멈추고 , 조건을 (하나) 리턴하고 종료한다.
``` javascript
const arr1 = [{name:'hello',age:20},{name:'테스트',age:21},{name:'테스트2',age:22},{name:'테스트3',age:24},{name:'테스트4',age:19},]

const found = arr1.find((item)=> item.age === 19);
console.log(found)


```
find() 의 사용예시는 다음과 같다.

```javascript
// programmers 1단계 문제 서울에서 김서방 찾기 에서.

const solution = (seoul) => {
    let answer = '';
    const found = seoul.findIndex(element => element === 'Kim');
    //console.log(found)
    answer = `김서방은 ${found}에 있다`
    console.log(answer)
    return answer;
}


```
# filter
filter() 를 사용하면 , 파라미터로 넘긴 함수의 조건을 만족하는 요소만을 모아 배열로 반환한다. 즉 , 필터링을 해주고 필터링한 요소를 여러개를 반환할때 사용한다. 

``` javascript

const arr1 = [{name:'hello',age:20},{name:'테스트',age:21},{name:'테스트2',age:19},{name:'테스트3',age:19},{name:'테스트4',age:19},]

const filtering = arr1.filter((item)=> item.age === 19);
const filtering2 = arr1.filter((item)=> item.age > 19);
//console.log(filtering)
console.log(filtering2)


```

# some (조건을 만족하는 요소가 있는지 확인하기 )
조건을 만족하는 요소가 1개라도 있으면 true 그렇지 않으면 false 를 반환 , 조건을 만족하는 요소가 있으면 남은 요소들을 더 확인하지 않고 true 를 반환하고 종료한다.
``` javascript
const arr1 = [{name:'hello',age:20},{name:'테스트',age:21},{name:'테스트2',age:19},{name:'테스트3',age:19},{name:'테스트4',age:19},]

bool_check = arr1.some(item => item.name === '테스트4')
console.log(bool_check)

```
# reduce 

``` javascript 
// reduce 사용시 , 배열의 합구하기 
const arr1 = [1,2,3,4,5];
const sum = arr1.reduce((stack,item)=>{
  return stack+item
},0)
console.log(sum)
// foreach 사용시 배열의 합구하기 
let globalVar = 0;
arr1.forEach((item,index)=>{
  globalVar = globalVar+item
})
console.log(globalVar)



```
# reduce 를 이용하여 배열의 평균 구하기


``` javascript
const arr = [1,2,3,4]

let res = arr.reduce((accumulator,currentValue,currentIndex,array)=>{
return (accumulator + currentValue)
})


console.log(res/arr.length)


```
# reduce 이용하여 단일 배열로 단순화 하기

```javascript
const arr2 = [1,[2,3],4,[5,6,7]];
// reduce 중첩배열 단순화 
const arr_concat = arr2.reduce((stack,item)=>{
  return stack.concat(item);
},[]);

console.log(arr_concat)
// reduce 를 이용한 중첩배열 단순화 + join 
const arr3 = [1,[2,3],4,[5,6,[7,8,9]]];
const arr_concat2 = arr3.reduce((stack,item)=>{
  return stack.concat(item);
},[]);
console.log(arr_concat2.join(',').split(','))

```
# concat(배열 합치기)

```javascript
const arr3 = ['hello','world','test']
const arr4 = ['test2','test3','test4']
// foreach 
arr3.forEach((item,index)=>{arr4.push(item)});
console.log(arr4)
// concat 
arr5 = arr3.concat(arr4)
console.log(arr5)

```
   
# splice

```javascript

const str1 = [1,2,3,4,5];
// splice 삭제 
//str1.splice(0,2);
//console.log(str1)
// splice(시작인덱스 , 삭제할 요소 길이 , 추가 요소1 , 추가 2...)
// splice => 배열 요소들 사이에 요소를 추가할수있다.
// 단 , 요소 사이에 추가하기 위해서 기존 에있는 요소를 삭제한뒤 추가해야함
str1.splice(1,1,20);
str1.splice(3,1,50)
console.log(str1)


// splice 요소추가
const str3 = ['펭수','라이언','어피치','콘','브라운'];

// => [네오 , 튜브 , 프로도 , 브라운 ]
str3.splice(0,4,'네오','튜브','프로도')
console.log(str3)

```


# 문자열 정렬하는 방법 ( reverse ) 

 ```javascript

const arrSort = s => {
   let a = s.split('').sort().reverse().reduce((a,b) => a+b) 
   console.log(a) 
   }
    arrSort("ceasgwZ")




```
1. 들어온 문자열을 쪼개어 배열로 만든다.(split)

2. 오름차순으로 정렬한다.(sort)

3. 반전시킨다(reverse)

4. 문자 하나하나 들어가있는 배열을 합친다.(reduce)

``` javascript
// 전체 문자열 반대로 뒤집기 
var name = "test";

var nameReverse = name.split("").reverse().join(""); 





```

```javascript
// 자연수 뒤집어 배열로 만들기
// n => 12345 를 뒤집어서 [5,4,3,2,1] 로 만들고자 할때.
function solution(n) {
    let answer = [];
    let str = parseInt(n) + ''
    let a = str.split('').reverse()
    a.forEach((i)=>answer.push(parseInt(i)))
    return answer;
}


```
# 문자열에서 중복된 값 제거하기 

``` javascript
function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}
```
# javscript 에서 function 

자바스크립트에서 function 은 일급객체라고 부른다. 일급객체의 특징은 다음과 같이 설명한다.

첫째. 일급객체는 변수나 데이터 구조 안에 담을수있다.
둘째. 인자로 전달할 수 있다 (callback)

셋째. 반환 값 (return value 로 사용할수 있다)

넷째. 런타임에 생성할 수 있다.

다섯. 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

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

# closure 의 응용

버튼을 클릭하면 count 가 증가하는 function 이 있다고 가정하고 , 이를 closure 를 이용하여 구현 해본다.

```javascript

// 전역변수를 사용한 예시 
let globalVar = 0;

 function handleCilck () {
  globalVar ++;
  console.log('globalVar =>', globalVar)
  return globalVar;
}




```

```javascript

// closure 를 사용 
const btn = document.querySelector('button')

let handleCilck = (callback) => {
  let count = 0
  return ()=>{
    count++
    return callback(count)
  }
}

btn.addEventListener('click',handleCilck((result1)=>{
  console.log(result1);
}))

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

마찬가지로 콜백함수도 화살표함수로 이렇게 바꿀수 있다.

```javascript

const callFnc = (param1,callback) =>{
    let num2 = 21;
    return callback(param1 + num2);
}

const test = callFnc(2000,(result)=>{
  console.log(result)
})

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




