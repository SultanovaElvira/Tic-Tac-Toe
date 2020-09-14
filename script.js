let allTd = document.querySelectorAll("td");
let textarea = document.querySelector("textarea");
let one = document.querySelectorAll(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let player = "x";
let reset = document.querySelector(".reset");
let table = document.querySelector("table").getElementsByTagName("*")
let game= document.getElementById("game")
let gameFinished = false;


let numberOfTd = 0;
for (let td of allTd) {
  td.onclick = function () {
    if (!td.textContent && !gameFinished) {
      //or td.textContent == ""
      td.textContent = player;
      changePlayer();
      numberOfTd++;//count of clicks
    }

    let tdArr = [
      allTd[0],
      allTd[1],
      allTd[2],
      allTd[3],
      allTd[4],
      allTd[5],
      allTd[6],
      allTd[7],
      allTd[8],
    ];

    //X
    if (tdArr[0].textContent == "x" && tdArr[1].textContent == "x" && tdArr[2].textContent == "x") {
      textarea.textContent = "The winnner is X"; gameFinished= true
    } else if (tdArr[3].textContent == "x" && tdArr[4].textContent == "x" && tdArr[5].textContent == "x") {
      textarea.textContent = "The winnner is X"; gameFinished= true
    } else if (tdArr[6].textContent == "x" && tdArr[7].textContent == "x" && tdArr[8].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    } else if (tdArr[0].textContent == "x" && tdArr[3].textContent == "x" && tdArr[6].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    } else if (tdArr[1].textContent == "x" && tdArr[4].textContent == "x" && tdArr[7].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    } else if (tdArr[2].textContent == "x" && tdArr[5].textContent == "x" && tdArr[8].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    } else if (tdArr[0].textContent == "x" && tdArr[4].textContent == "x" && tdArr[8].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    } else if (tdArr[2].textContent == "x" && tdArr[4].textContent == "x" && tdArr[6].textContent == "x") {
      textarea.textContent = "The winnner is X";gameFinished= true
    }
    //0
    else if (tdArr[0].textContent == "0" && tdArr[1].textContent == "0" && tdArr[2].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[3].textContent == "0" && tdArr[4].textContent == "0" && tdArr[5].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[6].textContent == "0" && tdArr[7].textContent == "0" && tdArr[8].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[0].textContent == "0" && tdArr[3].textContent == "0" && tdArr[6].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[1].textContent == "0" && tdArr[4].textContent == "0" && tdArr[7].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[2].textContent == "0" && tdArr[5].textContent == "0" && tdArr[8].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[0].textContent == "0" && tdArr[4].textContent == "0" && tdArr[8].textContent == "0") {
      textarea.textContent = "The winnner is 0";gameFinished= true
    } else if (tdArr[2].textContent == "0" && tdArr[4].textContent == "0" && tdArr[6].textContent == "0") {
      textarea.textContent = "The winnner is 0";
    } else if (numberOfTd === 9) {
      textarea.textContent = "No winners";
    }

    if (textarea.textContent != "") {
      
       for(let td of allTd){
        //td.disabled = true 
        console.log(td.disabled)
       }
      //   setTimeout(function () {
      //     // location.reload(); 
      //     //сбросить все //or it can be written:
          // for (let index = 0; index < tdArr.length; index++) {
      //     allTd[index].disabled = true
      // //         tdArr[index].textContent = "";
      // //         textarea.textContent = ""
      // //        player = "x"
       // }
      //   }, 7000);
    
  };
}
}

console.log(gameFinished)
function changePlayer() {
  // if (player=== "x") {
  //   player = "0"
  // }else{
  //   player = "x"
  // }
  // or we can use ternary operator :
  player === "x" ? (player = "0") : (player = "x");
}
reset.onclick = function () {
  for (let index = 0; index < allTd.length; index++) {
    location.reload();//or we can use:
//gameFinished = false
    // allTd[index].textContent = "";
    // textarea.textContent = "";
    // player = "x";
    // numberOfTd = 0 
  }
};
