function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 예시 사용
console.log(factorial(5)); // 출력: 120