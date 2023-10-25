const startMessagesBtn = document.querySelector('.start-messages'); // (1)
const windowElementRef = new WeakRef(document.querySelector(".window__body")); // (2)
const closeWindowBtn = document.querySelector('.window__button'); // (3)

startMessagesBtn.addEventListener('click', () => { // (4)
    startMessages(windowElementRef);
    startMessagesBtn.disabled = true;
});

closeWindowBtn.addEventListener('click', () =>  document.querySelector(".window__body").remove()); // (5)


const startMessages = (element) => {
    const timerId = setInterval(() => { // (6)
        if (element.deref()) { // (7)
            const payload = document.createElement("p");
            payload.textContent = `Сообщение: Статус системы OK: ${new Date().toLocaleTimeString()}`;
            element.deref().append(payload);
        } else { // (8)
            alert("Элемент был удалён."); // (9)
            clearInterval(timerId);
        }
    }, 1000);
};