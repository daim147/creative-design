const buttons = document.querySelectorAll(".story-btn");
const card = document.querySelector(".team-member");
const story = document.querySelector(".story");
buttons.forEach(btn =>{
    btn.addEventListener("click", () =>{

      btn.classList.toggle("change")
    })
})
