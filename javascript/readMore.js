const readMore = () => {
  // Variables
  const containerHeight = document.querySelector('.card-md');
  const triggerOverflow = containerHeight.querySelector('#content-overflow');
  const behaviourBtn = containerHeight.querySelector('#btn-more');
  const btnText = behaviourBtn.querySelector('#read-more');
  const rotatedChevron = behaviourBtn.querySelector('.fa-chevron-down');

  // Handle the Read More effect
  if (behaviourBtn) {
    if (btnText.innerHTML === "Read More") {
      containerHeight.classList.add('more-height');
      triggerOverflow.classList.remove('overflow');
      // Handle the text
      btnText.innerHTML = "Read Less";
      // Handle the chevron turnover
      rotatedChevron.classList.add('turnover-transition');
    } else {
      containerHeight.classList.remove('more-height');
      triggerOverflow.classList.add('overflow');
      // Handle the text
      btnText.innerHTML = "Read More";
      // Handle the chevron turnover
      rotatedChevron.classList.remove('turnover-transition');
    }
  }
};
