function handleModalRegister() {
    const modalController = document.querySelector(".modal__controller");
    const button = document.querySelector(".header__button");
    const button2 = document.querySelector(".faq__box-button");

    console.log(modalController);
    console.log(button)

    button.addEventListener("click", () => {
        modalController.showModal();
    })

    button2.addEventListener("click", () => {
        modalController.showModal();
    })
}

function closeModalRegister(){
    const modalController = document.querySelector(".modal__controller");
    const buttonClose = document.querySelector(".header__button-modal");
    

    buttonClose.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        modalController.close();

    })
}

function resetInput(){
    const buttonClose = document.querySelector(".header__button-modal");
    const input = document.querySelector(".input__email");

    buttonClose.addEventListener("click", () => {
        input.value = "";
    })
}

handleModalRegister();
closeModalRegister();
resetInput();
