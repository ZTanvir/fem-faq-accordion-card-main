const FAQ_QUESTIONS = document.querySelectorAll(".faq-question");

let FAQ_QUESTIONS_ARRAY = [...FAQ_QUESTIONS];

FAQ_QUESTIONS_ARRAY.forEach((qstn) => {
  qstn.addEventListener("click", (e) => {
    const ELEMENT = e.target.parentElement.nextElementSibling;
    console.log(ELEMENT);

    // Check if the user click on the faq question or faq arrow key
    if (ELEMENT.classList.contains("faq-answer")) {
      ELEMENT.classList.toggle("hide-qa-answer");
    }
  });
});
