function HexPicker() {
    let arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    const line1 = [];
    for (let i = 0; i < 6; i++) {
      line1.push(arr[Math.floor(Math.random() * 16)]);
    }
    let queu = "#" + line1.join("");
    return queu;
  }

export default HexPicker