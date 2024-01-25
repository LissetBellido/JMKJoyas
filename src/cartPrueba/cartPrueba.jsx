function CartPrueba() {
    const [products, setProducts] = useState([]);
  
    const addProduct = (product) => {
      setProducts([...products, product]);
    };
  
    const removeProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id));
    };
  
    return (
      <div>
        <h1>Carrito de compras</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addProduct({name: "Producto nuevo", price: 100})}>
          Agregar producto
        </button>
      </div>
    );
  }