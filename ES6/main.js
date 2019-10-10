function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3));