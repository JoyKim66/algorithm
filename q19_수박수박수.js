// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 
// 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// let n = 4;
// let subak = "";
// for (let i = 1; i <= n; i++){
//     if (i % 2 !== 0) {
//         subak += "수";
//     }else {
//         subak += "박";
//     }
// }console.log(subak);


let subak = "";
function solution(n) {
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0) {
            subak += "수";
        }else {
            subak += "박";
        }
    }return(subak);
}
console.log(solution(4));

//다른풀이

const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))