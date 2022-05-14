function solution(s) {
    let index = s.length / 2;
    //짝수
    if (s.length % 2 == 0) {
        return s[index - 1] + s[index]
    }
    //홀수
    else {
        return s[index - 0.5]
    }
}

let a = solution("abc")
console.log(a)

