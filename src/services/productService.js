function ProductService(product, amount) {
  product.stock -= 1;

  return product;
}

export { ProductService };

// a quanditade vendida pode ser de 1 ou mais unidades
// se estoque fica negativo uma exception deve ser lancada
