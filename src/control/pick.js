let take = "111, 111, 111"

for(let i = 7;  i <= 13; i++){
    for(let j = 7; j <= 11; j++){
      let pick = take.length == i ? j : (i+1)
      console.log(pick)
    }
}