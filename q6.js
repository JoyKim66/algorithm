
function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9]
    let result = arr.filter(item => !numbers.includes(item));
    console.log(result)
    let sum = 0;
    for(let i=0;i<result.length;i++){
        sum = sum + result[i]
    } return sum
}

// console.log(solution([5,8,4,0,6,7,9]))

