import { PRODUCTS_REGISTRY } from './src/lib/productsRegistry';

const cat = PRODUCTS_REGISTRY['custom-signs'];
const product = cat.products.find(p => p.id === 'coroplast-signs');

console.log("BASE PRODUCT CONFIG:");
console.log(JSON.stringify(product?.config?.sizes, null, 2));
