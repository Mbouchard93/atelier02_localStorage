/**
 * @param {string} title
 * @param {string} img
 * @param {string} shortdect
 * @param {number} price
 */
export default class Product {
    constructor(title, img, shortdect, price) {
        this.title = title;
        this.img = img;
        this.shortdesct = shortdect;
        this.price = price
    }
    /**
     * 
     * @returns {HTMLElement}
     */
    toHtml() {
        const div = document.createElement('div');
        const title = document.createElement('p');
        const img = document.createElement('img');
        const shortdect = document.createElement('p');
        const price = document.createElement('p')

        title.textContent = this.title;
        img.src = this.img;
        shortdect.textContent = this.shortdesct;
        price.textContent = 'prix : ' + this.price + '$';

        div.className = 'w-[350px] flex flex-col gap-4 justify-around items-center p-4 border rounded bg-white'
        img.className = 'h-[250px]'

        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(shortdect)
        div.appendChild(price)
        
        return div; 
    }
}