function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    let count = 0;
    let result = [];
    while (count < 10) {
        let findNumber = numbers.includes(count);
        if (!findNumber) {
            result.push(count)
        }
        count++;
    }
    
    return result.reduce((acc, cur) => acc + cur);
}