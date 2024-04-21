function toggleQuestion(questionNumber) {
  const questions = document.querySelectorAll(".questions");
  questions.forEach((question, index) => {
    const answer = document.querySelector(`.answer${index + 1}`);
    const icon = document.querySelector(`#icon${index + 1}`);
    if (index == questionNumber - 1) {
      answer.classList.remove("hide");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      answer.classList.add("hide");
      answer.style.maxHeight = 0;
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
}
