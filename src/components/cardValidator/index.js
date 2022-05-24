import cardTypes from "./cardTypes";
import luhn from './luhn';

export default class CardValidator {
    subElements = {};
    start;
    score = 0;


    onSubmit = (event) => {
        event.preventDefault();
        this.check();
    }

    constructor() {
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();
        this.element = wrapper.firstElementChild;

        this.subElements = this.getSubElements();
        this.initEventListeners();
    }

    initEventListeners() {
        const { formGroup } = this.subElements;

        formGroup.addEventListener('submit', this.onSubmit);

    }

    check() {
        const { formGroup } = this.subElements;
        this.value = formGroup.check.value;


        if (luhn(this.value)) {
            this.checkDigitStart()
        }
    }

    checkDigitStart() {
        const checked = cardTypes.find((card) => this.value.startsWith(card.startDigit));
        if (checked !== undefined && checked.digitCount.includes(this.value.length)) {
            this.showCard(checked);
        } else {
            this.showCard();
        }
    }

    showCard(checked = false) {
        const cards = this.subElements.cards.querySelectorAll('.validator__img');
        cards.forEach((card) => card.classList.add('validator__img_darken'));
        if (checked) {
            this.subElements[checked['name']].classList.remove('validator__img_darken');
        }
    }

    addCards() {
        return [...cardTypes].map((card) => {
            return `<img class="validator__img"  data-element="${card.name}" src="${card.url}" alt="${card.fullName}">`
        }).join('');
    }

    getSubElements() {
        const elements = this.element.querySelectorAll('[data-element]')
        for (const item of elements) {
            this.subElements[item.dataset.element] = item;
        }
        return this.subElements;
    }



    getTemplate() {
        return `<div class="validator">
        <div class="validator__cards" data-element="cards">
        ${this.addCards()}
        </div>
        <form class="form-group" data-element="formGroup">
            <label for="input" class="form-group__label">Check card</label>
            <div class="form-group__input">
                <input class="form-group__control" data-element="formInput" type="number" id="input" name="check" placeholder="number card" required>
                <button type="submit" class="button button_primary">
                Click to validate
             </button>
            </div>
        </form>    
    </div>`
    }



    remove() {
        if (this.element) {
            this.element.remove();
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = null;
    }


}