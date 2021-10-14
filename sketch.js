let n = 90;
let m = 100000; 
let randomnum;
let variavel = 0;
let media = 0;

for (var a = 0; a < m; a += 1){
  for (var b = 0; b < n; b += 1){
    randomnum = Math.random()
    if (randomnum < 0.5){
      randomnum = -1
    }
    if (randomnum >= 0.5){
      randomnum = 1
    }
    variavel += randomnum
  }
  if (variavel < 0){
    variavel *= -1
  }
  media += variavel
  variavel = 0
}
media = media/m
pi = (2*n)/media**2
console.log(pi)