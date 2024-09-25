const btnTop = document.getElementById('backToTop');
//A conditional function,  if the page is scrolled for more than 300px, the scroll button will be shown ,and if not dot'n show this btn
window.onscroll = function () {
    if (window.scrollY > 300) {
      btnTop.style.display = 'block';
    } else {
      btnTop.style.display = 'none';
    }
};
//when click on btn will back to top page with smooth behavior
btnTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});