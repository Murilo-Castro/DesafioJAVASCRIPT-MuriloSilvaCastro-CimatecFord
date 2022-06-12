//carousel
//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, url) {
        this._image = image;
        this._tilte = title;
        this._url = url;
    }

    get image() {
        return this._image;
    }
    get title() {
        return this._tilte;
    }
    get url() {
        return this._url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.addImg();
                Carousel.addLegend();
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }
        } else throw "Method Start need a Array Variable.";
    }

    static Next() {
        var imgs = document.querySelectorAll(".img-carousel");
        var legends = document.querySelectorAll(".legend");
        
        imgs[Carousel._sequence].style.display = "none";
        legends[Carousel._sequence].style.display = "none";
        Carousel._sequence++;

        if(Carousel._sequence == Carousel._size) Carousel._sequence = 0;
        
        imgs[Carousel._sequence].style.display = "block";
        legends[Carousel._sequence].style.display = "block";
    }

    static addImg(){
        for(var i= 0; i < carouselArr.length; i++){
            var carousel = document.querySelector("#carousel");
            var img = document.createElement("img");
            img.src = carouselArr[i].image;
            img.classList.add("img-carousel");
            carousel.appendChild(img);
        }        
    }
    static addLegend(){
        for(var i= 0; i < carouselArr.length; i++){
            var legend = document.querySelector("#carousel-title");
            var link = document.createElement("a");
            link.innerText = carouselArr[i].title;;
            link.href = carouselArr[i].url;
            link.classList.add("legend");
            legend.appendChild(link);
        }        
    }
};