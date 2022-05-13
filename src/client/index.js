console.log("index loaded");
import handleSubmit from "./js/formHandler";
// TODO: include your scss file here

// TODO: get the button for submit
const submitBtn = document.getElementById("btn-submit")
// TODO: add event listener to it when the click to call handleSubmit function
submitBtn.addEventListener('click', () => {
     handleSubmit()
})