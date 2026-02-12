let total = 0;

function addWork() {
  const date = document.getElementById("date").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const salary = Number(document.getElementById("salary").value);

  if (!date || !start || !end || !salary) {
    alert("全部入力してください");
    return;
  }

  const startTime = new Date(`2000-01-01T${start}`);
  const endTime = new Date(`2000-01-01T${end}`);

  const hours = (endTime - startTime) / 3600000;

  if (hours <= 0) {
    alert("終了時間が正しくありません");
    return;
  }

  const money = Math.floor(hours * salary);
  total += money;

  const li = document.createElement("li");
  li.textContent = `${date} ｜ ${hours.toFixed(2)} 時間 ｜ ${money} 円`;
  document.getElementById("list").appendChild(li);

  document.getElementById("total").textContent = `合計：${total} 円`;
}
