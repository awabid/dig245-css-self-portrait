
/* javascript */


const matches = document.querySelectorAll("div");
//all divs used in portrait except tracker, so minus 1
console.log("Number of Html elements in portrait: %d", matches.length-1);


//tracking and displaying mouse position
function track(e){
  document.getElementById('x-val').textContent = e.x;
  document.getElementById('y-val').textContent = e.y;

}
document.onmousemove= track;
