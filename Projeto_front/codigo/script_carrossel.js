// Carrossel


document.getElementById('next').onclick = function () {
  const container = document.getElementById('container');
  const widthItem = document.querySelector('.card').offsetWidth;

  container.scrollLeft += widthItem;

  // Check if reached the end, and reset to the first item if necessary
  if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
    container.scrollLeft = 0;
  }
};

document.getElementById('prev').onclick = function () {
  const container = document.getElementById('container');
  const widthItem = document.querySelector('.card').offsetWidth;

  container.scrollLeft -= widthItem;

  // Check if scrolled to the beginning, and jump to the last item if necessary
  if (container.scrollLeft < 0) {
    container.scrollLeft = container.scrollWidth - container.offsetWidth;
  }
};
