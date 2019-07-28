// // console.log("hello webpack")
// import "./css/index.css"
// import axios from "axios"

// axios.get("/api/info").then(res => {
//   console.log(res)
// })

// var btn = document.createElement("button")
// btn.innerHTML = "新增"
// setTimeout(() => {
//   document.body.appendChild(btn)
// })
// btn.onclick = function() {
//   var div = document.createElement("div")
//   console.log(1)
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }


// 热更新
// import counter from './a'
// import number from './b'
// counter()
// number()
// if (module.hot) {
//   module.hot.accept("./b", function() {
//   document.body.removeChild(document.getElementById("number"));
//   number();
//   });
//  }


const arr = [new Promise(() => { }), new Promise(() => { })]

arr.map(item => {
  console.log(item)
})
 