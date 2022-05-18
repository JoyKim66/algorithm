// 함수 solution은 정수 n을 매개변수로 입력받습니다.
//  n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
//   예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	     return
// 118372	 873211


// let n = 118372;
// let arr = (n+'').split('');
// let result = arr.sort((a,b) => b-a).join('');

// console.log(result);


// 1. 숫자열 문자로 바꾸고 2.배열로바꿔서 3.내림차순정렬 4.다시문자로
function solution(n) {
    let result = (n+'').split('').sort((a,b) => b-a).join('');
    let num = Number(result); //문자를 숫자열로
    return num;
}

console.log(solution(118372));