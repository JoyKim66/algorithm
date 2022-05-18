// let s = "try hello"
// let str = s.split(" ")
// let answer = "";
// for (i=0; i<str.length; i++) {
//     for(j=0; j<str[i].length; j++) {
//         if (j % 2 === 0) {
//             answer += str[i][j].toUpperCase();
//         }else {
//             answer += str[i][j].toLowerCase();
//         }
//     }
//     if(i < str.length - 1){
//         answer = answer + " "
//     }
// }


function solution(s) {
    let str = s.split(" ")
    let answer = "";
    for (i=0; i<str.length; i++) {
        for(j=0; j<str[i].length; j++) {
            if (j % 2 === 0) {
                answer += str[i][j].toUpperCase();
            }else {
                answer += str[i][j].toLowerCase();
            }
        }
        if(i < str.length - 1){
            answer = answer + " ";
        }
    }return answer;
}

console.log(solution("try hello world"));