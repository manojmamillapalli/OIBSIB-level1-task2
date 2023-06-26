console.log("script is running")
document.querySelector('.cross').style.display='none';
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
// })

    function myFunction() {
      var x = document.getElementById("sbar");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    