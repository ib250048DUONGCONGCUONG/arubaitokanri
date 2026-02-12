let total = 0;

function addWork() {
  const date = document.getElementById("date").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const salary = parseFloat(document.getElementById("salary").value);

  if (!date || !start || !end || !salary) {
    alert("全部入力してください");
    return;
  }

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;

  if (endMin <= startMin) {
    alert("終了時間は開始時間より後にしてください");
    return;
  }

  const hours = (endMin - startMin) / 60;
  const money = Math.floor(hours * salary);

  total += money;

  const li = document.createElement("li");
  li.textContent = `${date}｜${hours.toFixed(2)} 時間｜${money} 円`;
  document.getElementById("list").appendChild(li);

  document.getElementById("total").textContent = `合計：${total} 円`;
}
