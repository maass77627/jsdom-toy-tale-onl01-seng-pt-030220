document.addEventListener("DOMContentLoaded", function() {
  console.log("HELLO WORLD")

  fetch("http://localhost:3000/toys")
  .then(function(response) {
    response.json
})
  .then(function(object){
    console.log(object)
  })

});
