// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	    return
// 12345 	[5,4,3,2,1]


// 문자열 배열로 바꾸기
// sort로 내림차순

// 숫자열 문자열 

const n = 1234;
const str = String(n);
const splitArr = str.split("").reverse();
const answer = splitArr.map(Number);
// const arr = [];
// // const newArr = arr.sort((a,b) => b-a);
// const arr2 = arr.push(n);
// const newArr = arr2.split();

console.log(answer);



// function solution(n) {
//     const str = String(n);
//     const arr = Array.from(str);
//     const newArr = arr.sort((a,b) => b-a);

//     return newArr;
// }

// 내림차순아니고 뒤집는거라 sort사용 x

// console.log(solution(19402));