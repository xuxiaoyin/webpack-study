// console.log("hello webpack")
import "./css/index.css"
import axios from "axios"

axios.get("/api/info").then(res => {
  console.log(res)
})

var btn = document.createElement("button")
btn.innerHTML = "新增"
setTimeout(() => {
  document.body.appendChild(btn)
})
btn.onclick = function() {
  var div = document.createElement("div")
  console.log(1)
  div.innerHTML = "item"
  document.body.appendChild(div)
}