export default function ProductsList({ products }) {
  return (
    <div className="products">
      <div className="titles">
        <p>Produtos</p>
        <p>Quantidade</p>
        <p>Valor</p>
      </div>
      <ul className="products-list">
        {products.products.map((p) => (
          <li>
            <p>{p.name}</p>
            <div>
              <p>{p.amount}</p>
              <p>R$ {p.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
