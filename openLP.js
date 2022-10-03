const previousButton1 = document.querySelector("#service-previous");
const nextButton1 = document.querySelector("#service-next");
const previousButton2 = document.querySelector("#controller-previous");
const nextButton2 = document.querySelector("#controller-next");
const footer1 = document.querySelector("#service-manager>[data-role=footer]");
const footer2 = document.querySelector("#slide-controller>[data-role=footer]");

const style = document.createElement("style");
style.textContent = `.bigButton { 
    transform: scale(3);
    margin: 0 7rem !important;
}
    .bigFooter {
      padding: 3rem 0 !important;
    }`;

document.getElementsByTagName("head")[0].appendChild(style);

previousButton1.classList.add("bigButton");
nextButton1.classList.add("bigButton");
previousButton2.classList.add("bigButton");
nextButton2.classList.add("bigButton");
footer1.classList.add("bigFooter");
footer2.classList.add("bigFooter");