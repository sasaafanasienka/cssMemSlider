const texts = {
    0: 'First meme',
    1: 'Second meme',
    2: 'Third meme',
    3: 'Fourth meme',
    4: 'Last meme',
}

class Slider {
    constructor() {
        this.buttons = document.querySelectorAll('.button')
        this.slider = document.querySelector('.slider')
        this.item = document.querySelector('.item')
        this.text = document.querySelector('.text')

        this.changeImage = this.changeImage.bind(this)    
        this.changeText = this.changeText.bind(this)    
    }

    init() {
        this.text.textContent = texts[0]
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => {this.changeImage(index)})
        })
    }

    changeImage(index) {
        const step = this.item.offsetWidth
        this.slider.style.transform = `translateX(-${step * index}px)`
        this.buttons.forEach((button, i) => {
            if (index == i) {
                button.classList.add('button_active')
            } else {
                button.classList.remove('button_active')
            }
        })
        this.changeText(index)
    }

    changeText(index) {
        this.text.classList.add('text_disabled')
        setTimeout(() => {
            this.text.textContent = texts[index]
            this.text.classList.remove('text_disabled')
        }, 200)
    }
}

const slider = new Slider
slider.init()