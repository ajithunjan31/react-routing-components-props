import Card from "../components/Card";

const products = [
  { "title": "iPhone 18 Pro", "desc": "256GB storage with an advanced camera system." },
  { "title": "Samsung S26 Ultra", "desc": "512GB storage with a powerful processor." },
  { "title": "MacBook Air", "desc": "Lightweight laptop with 16GB RAM and 512GB SSD." },
  { "title": "AirPods Pro", "desc": "Wireless earbuds with active noise cancellation." },
  { "title": "Apple Watch", "desc": "Smartwatch with fitness and health tracking." }
];

function Home() {
  return (
    <>
      <h1>All Products</h1>
      <div className="cards">
        {
          products.map((product, index) =>
            <Card key={index} title={product.title} desc={product.desc} />
          )
        }
      </div>
    </>
  )
}

export default Home
