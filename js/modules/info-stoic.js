export default function initAccordion() {
  const dts = document.querySelectorAll('dt');
  
  // settando o primeiro elemento como ativo
  dts[0].classList.add('ativo');
  dts[0].nextElementSibling.classList.add('ativo');

  dts.forEach((dt) => {
    function showDescription(event) {
      const nextElement = event.target.nextElementSibling;
      event.target.classList.toggle('ativo');
      nextElement.classList.toggle('ativo');
    }

    dt.addEventListener('click', showDescription)
  });
}