// Importing JS
console.log("index loaded");
import handleSubmit from "./js/formHandler";

// Importing scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Configure the submit button
const submitBtn = document.getElementById("btn-submit")
submitBtn.addEventListener('click', () => {
     handleSubmit()
})