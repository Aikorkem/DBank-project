import { dbank } from "../../declarations/dbank";

window.addEventListener("load", update());


document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const button = document.getElementById("submit-btn");
  const topUpValue = parseFloat(document.getElementById("input-amount").value);
  const withdrawValue = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);
  if(document.getElementById("input-amount").value.length != 0){
    await dbank.topUp(topUpValue);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdrawal(withdrawValue);
  }

  await dbank.compound();

  update();
  button.removeAttribute("disabled");
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
});

async function update(){
  const currentValue = await dbank.checkValue();
  document.getElementById("value").innerText = currentValue.toFixed(2);
};