const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const banner = document.createElement("div");
banner.className = "banner";
banner.style.height = innerHeight + "px";

const main = document.createElement("main");

container.append(banner, main);

const mainCaption = document.createElement("h2");
mainCaption.className = "main__caption";
mainCaption.innerText = "4 types of plants";
main.append(mainCaption);

class Plant {
    constructor(capt, imgPath, cnt, mini) {
        this.caption = capt;
        this.pic = imgPath;
        this.count = cnt;
        this.imgType = mini;
    }
}
const data = [
    new Plant("Foliage", "img/bg_3.png", 21,"img/plant_1.png"),
    new Plant("Pucculent", "img/bg_2.png", 4,"img/plant_2.png"),
    new Plant("Flower", "img/bg_1.png", 8,"img/plant_3.png"),
    new Plant("Fruit", "img/bg_4.png", 10,"img/plant_4.png"),
];

let mainContent = "";
data.forEach(plant => {
    // const card = document.createElement("div");
    // card.className = "main__item";
    // card.style.backgroundImage = `url(${plant.pic})`;
    // main.append(card);
    mainContent += `
        <div class="main__item" style="background-image: url(${plant.pic})">
            <h3>${plant.caption}</h3>
            <div class="main__item-text">${plant.count} plants</div>
            <img alt="${plant.caption}" src="${plant.imgType}">
        </div>
    `
});

main.innerHTML += mainContent;