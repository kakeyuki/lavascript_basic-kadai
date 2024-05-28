// 日付を取得する関数
  today = new Date();
const todayData = () => {
console.log(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日');
}

// 日付を出力
todayData ();