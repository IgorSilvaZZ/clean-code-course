// Código em inglês
import { useState } from "react";

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: "Macarrão",
    price: "R$ 25,00",
  },
  {
    title: "Hamburger",
    price: "R$ 30,00",
  },
];

export function ListProduto() {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  function getProductsByTitle(titleSearch: string) {
    const productsByTitle = productList.filter((product) =>
      product.title.includes(titleSearch)
    );

    setProductsFiltered(productsByTitle);
  }

  return (
    <div>
      <input type='text' onChange={(e) => getProductsByTitle(e.target.value)} />

      {productsFiltered.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
