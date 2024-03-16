import { useLocation } from "react-router-dom";

export default function ProductOverview() {
  const location = useLocation();
  const product = location.state?.product;

  console.log(product);
  return (
    <section className="text-scorpion-900 body-font overflow-hidden bg-rhino-50">
      <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img
            alt={product.name}
            className="lg:w-2/3 w-full object-cover object-center rounded-lg"
            src={product.img}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
          <h2 className="text-sm text-scorpion-500 tracking-widest">
            {product.brand_name}
          </h2>
          <h1 className="text-3xl lg:text-4xl text-scorpion-900 font-medium my-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            {product.rating}
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 text-gray-500 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-500 mr-2">
              {product.reviews} Reviews
            </span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-500 mr-2 uppercase">
              {product.category_name}
            </span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-500 uppercase">{product.style}</span>
          </div>

          <p className="leading-relaxed mb-6 text-center lg:text-left">
            {product.description}
          </p>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-scorpion-600">Size:</span>
            <select className="rounded border border-scorpion-300 focus:outline-none focus:border-rhino-500 text-base pl-3 pr-10 py-2">
              {product?.size.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <span className="text-xl lg:text-2xl font-medium text-scorpion-600 line-through mr-4">
              {"₹"}
              {product.original_price}
            </span>
            <span className="text-3xl lg:text-4xl font-bold text-rhino-500">
              {"₹"}
              {product.discounted_price}
            </span>
          </div>
          <button className="mt-8 bg-rhino-500 hover:bg-rhino-600 text-rhino-50 font-semibold py-3 px-8 rounded-full transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
// import { useLocation } from "react-router-dom";

// const ProductOverview = () => {
//   const location = useLocation();
//   const product = location.state?.product;
//   return (
//     <section className="product-overview bg-gradient-to-r from-rhino-50 to-rhino-100 h-screen overflow-hidden">
//       <div className="container px-5 py-14 mx-auto flex flex-wrap justify-around items-center space-x-2">
//         <ProductImage image={product.img} alt={product.name} />
//         <ProductInfo product={product} />
//       </div>
//     </section>
//   );
// };

// const ProductImage = ({ image, alt }) => {
//   return (
//     <div className="product-image lg:w-1/3 w-full mb-6 lg:mb-0 aspect-ratio-square relative">
//       <img
//         src={image}
//         alt={alt}
//         className="rounded object-cover object-center w-full h-full shadow-md hover:opacity-80"
//       />
//     </div>
//   );
// };

// const ProductInfo = ({ product }) => {
//   return (
//     <div className="product-info lg:w-1/3 w-full">
//       <h2 className="text-3xl title-font text-totem-pole-900 font-bold mb-2 lg:mb-4">
//         {product.name}
//       </h2>
//       <div className="flex items-center mb-2">
//         <span className="mr-2 text-rhino-500">
//           <svg
//             fill="currentColor"
//             stroke="currentColor"
//             stroke-width="2"
//             viewBox="0 0 24 24"
//             className="w-4 h-4"
//           >
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//           </svg>
//         </span>
//         <span className="text-scorpion-500">
//           {product.reviews.length} Reviews
//         </span>
//       </div>
//       <p className="text-scorpion-700 mb-4 leading-relaxed">
//         {product.description}
//       </p>
//       <div className="flex items-center mb-4">
//         <span className="mr-3 text-scorpion-700">Size:</span>
//         <select className="rounded border border-rhino-200 py-2 px-3 focus:outline-none focus:border-totem-pole-500 text-base">
//           {product.size.map((item, key) => (
//             <option key={key}>{item}</option>
//           ))}
//         </select>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="price flex items-center">
//           <span className="text-rhino-500 line-through mr-2">
//             ₹{product.original_price}
//           </span>
//           <span className="text-totem-pole-900 font-bold">
//             ₹{product.discounted_price}
//           </span>
//         </div>
//       </div>
//       <div className="my-4 ">
//         <button className="rounded-full bg-totem-pole-500 hover:bg-totem-pole-700 p-2 text-rhino-50 shadow-md">
//           <svg
//             fill="none"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             viewBox="0 0 24 24"
//             className="w-5 h-5"
//           >
//             <path d="M3 3h16v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3zM6 7h12v9H6zM12 17v.01"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductOverview;
