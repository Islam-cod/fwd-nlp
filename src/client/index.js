console.log("index loaded");
import handleSubmit from "./js/formHandler";
// Include your scss file here

// get the button for submit
const submitBtn = document.getElementById("btn-submit")
submitBtn.addEventListener('click', () => {
     handleSubmit()
})