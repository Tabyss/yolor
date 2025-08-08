// 44°, 98%, 50%

function MonoChrome(h, s, l) {
  let arrP = [];

  for (let i = 0; 4 > arrP.length; i++) {
    let arrC = [];
    for (let y = 0; 3 > arrC.length; y++) {
      // arrC.push(h);
      // if (35 <= s <= 100) {
      //   s -= 20;
      // } else {
      //   s += 20;
      // }
      // if ((s - 20) > 0) {
      //   for(let o = 0; )
      //   console.log(s);
      // } else {
      //   s += 20;
      // }
      switch (s - 20 > 0) {
        case true:
          s -= 20;
          break;
        case false:
          s += 20;
          break;
      }

      if (35 <= l && l <= 100) {
        // console.log(l);
        l -= 20;
      } else {
        l += 20;
      }
      arrC.push(h, s, l);
    }
    arrP.push(arrC);
    console.log(arrC);
  }

  // if (s <= 100) {
  //   for (let i = 0; 4 > arrP.length && s > 35; i++) {
  //     s -= 20;
  //     let tempArr = [h, s]
  //     arrP.push(tempArr)
  //   }
  //   for (let i = 0; 4 > arrP.length; i++){
  //     s += 20
  //     let tempArr = [h, s]
  //     arrP.push(tempArr)
  //   }
  //   console.log(arrC.length)
  // }

  console.log(arrP);
}

MonoChrome(120, 30, 60);

export default MonoChrome;
