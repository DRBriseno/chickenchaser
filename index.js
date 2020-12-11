function calculateScore() {
  var chknAmt = document.getElementById("chknTotal").value;
  var spdAmount = document.getElementById("spdPercentage").value;
  var numOfChicken = document.getElementById("numChicken").value;

  if (spdAmount === "other") {
    spdAmount = document.getElementById("mphNum").value/100;
  }

  if (chknAmt === "" || spdAmount == 0) {
    alert("Please make sure ALL values are entered");
    return;
  }
  if (numOfChicken === "" || numOfChicken <= 1) {
    numOfChicken = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  var total = (chknAmt * spdAmount) / numOfChicken;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalSpd").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
function clearForm() {
  document.getElementById("form").reset();
  document.getElementById("numChicken").value = "";
}

function show(value) {
  if (value == "other") {
    tipNum.style.display='inline-block';
    percentage.style.display='inline-block';
  } 
  else{
    tipNum.style.display='none';
    percentage.style.display='none';
  }
}
document.getElementById("totalSpd").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("mphNum").style.display = "none";
document.getElementById("percentage").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calculateTip();

};


document.getElementById("clear").onclick = function() {
  clearForm();
  document.getElementById("totalSpd").style.display = "none";
  document.getElementById("each").style.display = "none";
  document.getElementById("mphNum").style.display = "none";
  document.getElementById("percentage").style.display = "none";

};

