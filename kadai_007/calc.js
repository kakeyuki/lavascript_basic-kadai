// 変数numに1以上の整数を代入する
n = 1000;
let num = Math.floor(Math.random() * n) + 1;
// 課題の内容の中で上限は記載さてれいませんでしたが、上限を設けないコードの書き方がわからなかったので、任意の上限を設けさせていただきました。

// 変数numの値を出力する(確認用)
console.log(num);

// 3と5の倍数のとき
if (num%3===0 && num%5===0) {
  console.log('3と5の倍数です');
}else if (num%3===0) {
  console.log('3の倍数です');
}else if (num%5===0) {
  console.log('5の倍数です');
}else {
  console.log(num);
}
