// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 
// "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 입출력 예
// s	       answer
// "pPoooyY"	true
// "Pyy"	    false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// p랑 y를 숫자 1로 바꾸기

// p+y 총 더해서 짝수면 트루 홀수면 펄스 0이어도 트루 


// const s = "ooo"
// let sum = 0;
// for(let i=0; i<s.length; i++) {
//     if (s[i] === "p" || 
//     s[i] ==="P" ||
//     s[i] ==="y" || 
//     s[i] ==="Y") {
//         sum += 1
//     }
// }
// if (sum % 2 === 0) {
//     console.log("True");
// }else{
//     console.log("false")
// }



function solution(s){
    let sum = 0;
    for(let i=0; i<s.length; i++) {
        if (s[i] === "p" || 
        s[i] ==="P" ||
        s[i] ==="y" || 
        s[i] ==="Y") {
            sum += 1
        }
    }
    if (sum % 2 === 0) {
        return true;
    }else{
        return false
    }
}

console.log(solution("ppspYYy"))

//p의 갯수와 y의 갯수가 같으면 짝수는 맞으나 그 역이 성립하지 않아서 틀림


//풀이
function solution(s){
    let sum = 0;
    let sum2 = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === "p" || s[i] === "P"){
            sum += 1
        }else if(s[i] === "y" || s[i] === "Y"){
            sum2 += 1
        }
    }
    if (sum === sum2) {
        return true;
    } else {
        return false;
    }
}

console.log(solution("asdfasdf"))


function solution(s){
    let sum = 0;
    let sum2 = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === "p" || s[i] === "P"){
            sum += 1
        }else if(s[i] === "y" || s[i] === "Y"){
            sum2 += 1
        }
    }
    return sum === sum2;
}
