// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
function solution(s) {
    if (s.length !== 4 & 6) {
        return false
    } else if (isNaN(s)) {
        return false
    } else {
        return true
    }
}

console.log(solution("1e22"));
//지수식으로는 통과가 안됨 


//정규표현식으로 풀이방법
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( alpha_string46("a234") );