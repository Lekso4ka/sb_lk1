const images = ["img/bird.svg", "img/cat.svg", "img/dog.svg"];

images.forEach(el => {
    const img = document.createElement("div");
    img.className = "mini__item";
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener("click", e => 
        showPopup(`<img alt="pic" src="${el}">`)
    )
    document.body.append(img);
});

const popup = document.querySelector(".popup");
/*
    getElementById - one
    getElementsByTagName - many
    getElementsByClassName - many
    getElementsByName - many
*/

const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

const closePopup = function(e) {
    e.target.parentElement.classList.remove("popup_active");
}
const showPopup = function(text) {
    popup.classList.add("popup_active");
    popupContent.innerHTML = text;
}

popupClose.addEventListener("click", closePopup);

// #hw1 link(git)
/*
    1) при нажатии на поле вне картинки закрывать popup
    2) предусмотреть возможность закрытия окошка по нажатию на кнопки:
        (keyup/keydown)
        - esc
        - alt+f4 (preventDefault!!!!)
    3) сделать интерфейс в виде lightbox - все элементы за popup становятся затененными
*/