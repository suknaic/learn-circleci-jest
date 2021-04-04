import { Product } from "../src/model/product";
import { ProductService } from "../src/services/productService";

test("deve validar baixa de estoque da venda de uma unidade", () => {
  let produto = new Product("celular", 500.0, 900.0, 10);
  ProductService(produto, 1);

  expect(produto.stock).toBe(9);
});

test("deve aceita a venda de mais do que uma unidade", () => {
  let produto = new Product("celular", 500.0, 900.0, 10);
  ProductService(produto, 3);

  expect(produto.stock).toBe(7);
});
