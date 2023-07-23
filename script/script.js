const FAQ_QUESTIONS = document.querySelectorAll(".faq-question");

let FAQ_QUESTIONS_ARRAY = [...FAQ_QUESTIONS];

FAQ_QUESTIONS_ARRAY.forEach((faqQstn) => {
  faqQstn.addEventListener("click", (e) => {
    const ELEMENT = e.target.parentElement.nextElementSibling;
    const QUESTION = e.target.parentElement.firstElementChild;
    const ARROWIMAGE = e.target.parentElement.lastElementChild;

    // Check if the user click on the faq question or faq arrow key
    if (ELEMENT.classList.contains("faq-answer")) {
      ELEMENT.classList.toggle("hide-qa-answer");
      // add styles to the faq question
      QUESTION.classList.toggle("bold-faq-question");
      ARROWIMAGE.classList.toggle("rotate-question-arrow");
    }
  });
});
