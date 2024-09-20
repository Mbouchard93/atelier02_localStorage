import Product from './Product.js';
import products from './products.js';
import './localStorage.js'

/**

/**
 * @type {HTMLElement}
 */
const container = document.querySelector('.container')

/**
 * @param {Product} product
 */
products.forEach(product => {
    container.appendChild(product.toHtml()) 
});

