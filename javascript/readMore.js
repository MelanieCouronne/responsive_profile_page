const readMore = () => {
  // Variables
  const btnTrigger = document.getElementById('btn-more');
  const triggerOverflow = document.getElementById('content-overflow');
  const containerHeight = document.querySelector('.card-md');

  // Handle the Read More effect
  if (btnTrigger) {
    if (btnTrigger.innerHTML === "Read More") {
      containerHeight.classList.add('more-height');
      triggerOverflow.classList.remove('overflow');
      btnTrigger.innerHTML = "Read Less";
    } else {
      containerHeight.classList.remove('more-height');
      triggerOverflow.classList.add('overflow');
      btnTrigger.innerHTML = "Read More";
    }
  }
};
