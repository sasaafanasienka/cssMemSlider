class Slider {
    constructor() {
        this.buttons = document.querySelectorAll('.button')
        this.slider = document.querySelector('.slider')

        this.changeimage = this.changeimage.bind(this)    }

    init() {
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => {this.changeimage(index)})
        })
    }

    changeimage(index) {
        this.slider.style.transform = `translateX(-${500 * index}px)`
        this.buttons.forEach((button, i) => {
            if (index == i) {
                button.classList.add('button_active')
            } else {
                button.classList.remove('button_active')
            }
        })
        // console.log(index)
    }
}

const slider = new Slider
slider.init()