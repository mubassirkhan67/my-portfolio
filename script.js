/* Social Links */

.social-links {
    margin-top: 25px;
}

.social-links a {
    display: inline-block;

    color: #00abf0;
    text-decoration: none;

    border: 2px solid #00abf0;
    border-radius: 6px;

    padding: 10px 20px;
    margin-right: 10px;

    transition: 0.3s;
}

.social-links a:hover {
    background-color: #00abf0;
    color: #081b29;
}
const projectButton = document.getElementById("projectButton");

projectButton.addEventListener("click", function() {
    console.log("Project button was clicked!");
});

const text = "BS Artificial Intelligence Student";

const typingText = document.getElementById("typing-text");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 90);
    }
}

typeText();
