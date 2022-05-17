// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]


// let answer = [];             //x,n값 임의로 설정해봄
// let x = 2;
// let n = 3;
// for (i=1; i<=n; i++) {           //i는 1부터 시작하는건데 i-1이라고 안했으면 i부터 가능인듯
//     let result = x + (i-1) * x;     //등차수열 일반항 공식 사용
//     answer[i-1] = result
// } console.log(answer)

let answer = [];             //x,n값 임의로 설정해봄
let x = 2;
let n = 3;
for (i=0; i<n; i++) {           //i-1 -> i로 바꾸고 하나씩 식변경함 
    let result = x + i * x;     //등차수열 일반항 공식 사용
    answer[i] = result
} console.log(answer)

function solution(x, n) {          //함수버전
    let answer = [];
    for (i=1; i<=n; i++) {
        let result = x + (i-1) * x;     
        answer[i-1] = result
    }  return answer;
}


//다른사람 풀이
function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
