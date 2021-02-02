


console.log("Hello!")
window.addEventListener("DOMContentLoaded", event => {
   let h1 = document.createElement("h1")
   h1.setAttribute("id", "fullname")
   h1.setAttribute("class", "my-name")
   let h1Content = document.createTextNode("Alex Hertel")
   h1.appendChild(h1Content)
   document.body.appendChild(h1)




   let newItemsList = document.createElement("ul")
   newItemsList.setAttribute("id", "details")
   newItemsList.setAttribute("class", "my-details")
   document.body.appendChild(newItemsList)
   const detailsArr = [
      "<li> I have two brothers.</li>",
      "<li> I used to live in Colorado.</li>",
      "<li>I live in Chicago.</li>",
      "<li>I like to Camp</li>",
      "<li>I've been to Alaska.</li>",
      "<li>My name is Alex.</li>"
   ]

   const liString = detailsArr.join(" ")
   console.log(liString)
   const listElement = document.getElementById("details")
   console.log(listElement)
   listElement.innerHTML = liString

   let lis = document.querySelectorAll("li")
   lis.forEach(function(el) {
      el.className = "detail"
   })

   const myDetails = document.createElement("ul");
   myDetails.setAttribute("class", "my-details");

   let clock = document.createElement("clock")
   clock.setAttribute("id", "time")
   clock.setAttribute("class", "current-time")
   details.appendChild(clock)
   // document.body.appendChild(clock);
   const getTime = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();

      let clockText = `I live in Chicago, IL, and it is currently
      ${hours}:${minutes}:${seconds}
      and we are buried in snow.`
      clock.innerText = clockText;
   }
   setInterval(getTime, 1000);
})
