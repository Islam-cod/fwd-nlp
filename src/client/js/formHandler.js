import checkUrl from "./checkURL";

const post = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const resData = await response.json();
        console.log('Data received:', resData)
        return resData;
    } catch (error) {
        console.log('error', error);
    }
};

const handleSubmit = async () => {
let formText = document.getElementById('article-url').value
if (checkUrl(formText)) {
    console.log("URL valid")
    post('http://localhost:8081/add-url', {formText}).then(data => {
        document.getElementById('text').innerHTML = `${data.text}`
        document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
        document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
        document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`
    })
} else {
    alert('invalid URL')
}}

export default handleSubmit