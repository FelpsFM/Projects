 // Seleciona os elementos relevantes
 const btnSubmit = document.querySelector('.header__btnSubmit');
 const btnSubmitDois = document.querySelector('#joinbtn');
 const modalMain = document.querySelector('.modalMain');
 const modalClose = document.querySelector('.modalClose');

 // Função para abrir a modal
 function openModal() {
   modalMain.showModal();
 }

 // Função para fechar a modal
 function closeModal() {
   modalMain.close();
 }

 // Adiciona os eventos de clique aos botões
 btnSubmit.addEventListener('click', openModal);
 btnSubmitDois.addEventListener('click', openModal);
 modalClose.addEventListener('click', closeModal);
