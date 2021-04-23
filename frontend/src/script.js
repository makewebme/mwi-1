import calc from './inc'
import './styles/style.scss'

console.log(calc(4))

// const updateProducts = () => {
//   fetch('http://localhost:1337/products')
//     .then((res) => res.json())
//     .then((products) => {
//       console.log(products)

//       const productsUL = document.querySelector('.products')
//       let productsLIs = '';

//       products.forEach((product) => {
//         productsLIs += `<li>
//           <img src="http://localhost:1337${product.images[0].formats.small.url}" />
//           <h4>${product.title}</h4>
//           <p>${product.description}</p>
//         </li>`
//       });

//       productsUL.innerHTML = productsLIs;
//     })
// }

// updateProducts()

// const btnUpdate = document.querySelector('.update')

// btnUpdate.addEventListener('click', updateProducts)
