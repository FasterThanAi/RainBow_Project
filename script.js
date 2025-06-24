const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='violet'){
            body.style.background=e.target.id
        }
        if(e.target.id==='indigo'){
            body.style.background=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.background=e.target.id
        }
        if(e.target.id==='green'){
            body.style.background=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.background=e.target.id
        }
        if(e.target.id==='orange'){
            body.style.background=e.target.id
        }
        if(e.target.id==='red'){
            body.style.background=e.target.id
        }
    
    })
})
// const buttonsx = document.querySelectorAll(".button");

// buttonsx.forEach((btn) => {
//   btn.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = btn.style.backgroundColor;
//   });
//   btn.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = "white";
//   });
// });
// ==== CONFIGURATION ==========================================
// const MODE  = "toggle"; //   "hover" | "hover-delay" | "toggle"
// const DELAY = 500;      //   used only when MODE === "hover-delay"
// // =============================================================

// const body     = document.body;
// const buttons  = document.querySelectorAll(".button");

// let lockedColor = null;      // for toggle mode
// let resetTimer  = null;      // for hover-delay mode

// buttons.forEach(button => {
//   const color = button.id;   // ids are colour names

//   // ------------- CLICK: lock / unlock (only in toggle mode) --
//   button.addEventListener("click", () => {
//     if (MODE !== "toggle") return;

//     if (lockedColor === color) {
//       // unlock
//       lockedColor = null;
//       body.style.backgroundColor = "white";
//     } else {
//       lockedColor = color;
//       body.style.backgroundColor = color;
//     }
//   });

//   // ------------- HOVER IN ------------------------------------
//   button.addEventListener("mouseenter", () => {
//     if (MODE === "toggle" && lockedColor) return;   // ignore if locked
//     body.style.backgroundColor = color;

//     // clear any pending reset timer
//     if (resetTimer) {
//       clearTimeout(resetTimer);
//       resetTimer = null;
//     }
//   });

//   // ------------- HOVER OUT -----------------------------------
//   button.addEventListener("mouseleave", () => {
//     if (MODE === "toggle" && lockedColor) return;   // ignore if locked

//     if (MODE === "hover") {
//       body.style.backgroundColor = "white";
//     } else if (MODE === "hover-delay") {
//       resetTimer = setTimeout(() => {
//         body.style.backgroundColor = "white";
//         resetTimer = null;
//       }, DELAY);
//     }
//   });
// });
