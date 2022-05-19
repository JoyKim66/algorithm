// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 
// return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	   answer
// 123	   6
// 987	   24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

let n = 123;
let convert = (n+'').split('')
// for (i=0; i<convert.length; i++){
//     result += convert[i]*1;
//     console.log(+convert[i], typeof +convert[i]);       
// }console.log(result);  

result = convert.reduce((acc,cur) => acc+parseInt(cur),0); 
//0을 안넣으면 acc값에 '1'이라는 string이 들어가서
//string+number = str이라서 안됨


function solution(n)
{
    return (n+'').split('').reduce((acc,cur) => acc+parseInt(cur),0);
    
}

