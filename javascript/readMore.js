const readMore = () => {
  // Variables
  const triggerOverflow = document.getElementById('content-overflow');
  const containerHeight = document.querySelector('.card-md');
  const changedChevron = document.querySelector('.fa-chevron-down');
  const btnTrigger = document.getElementById('read-more');

  // Handle the Read More effect
  if (btnTrigger) {
    if (btnTrigger.innerHTML === "Read More") {
      containerHeight.classList.add('more-height');
      triggerOverflow.classList.remove('overflow');
      // Handle the text
      btnTrigger.innerHTML = "Read Less";
      // Handle the chevron turnover
      changedChevron.classList.add('turnover-transition');
    } else {
      containerHeight.classList.remove('more-height');
      triggerOverflow.classList.add('overflow');
      // Handle the text
      btnTrigger.innerHTML = "Read More";
      // Handle the chevron turnover
      changedChevron.classList.remove('turnover-transition');
    }
  }
};
