// btnというidを持つHTML要素を取得し、定数に代入する
const change = document.getElementById('btn');

// textというidを持つHTML要素を取得し定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textにテキストを追加する
  text.textContent = 'ボタンをクリックしました';
  // 作成したテキストを出力する
  console.log(text);
});