function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length; i++) {
       let num = t.substr(i, p.length);
       if (num.length < p.length) {
           break;
       }
       
       if (Number(p) >= Number(num)) {
           count++;
       }
    }
    return count;

}