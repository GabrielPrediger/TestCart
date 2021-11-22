import { useEffect, useState } from 'react';
import './Cart.css';

function App() {

  const [ item, setItem ] = useState([])
  const [ totalValue, setTotalValue] = useState([])
  const total = totalValue[0]?.value + totalValue[1]?.value


  useEffect(() => {
    fetch('./abaixo.json')
    .then(response => response.json())
    .then(data => {
      setItem(data.items) 
      setTotalValue(data.totalizers)
    })
  }, [])

  return (
    <div className="main">
      <h1>Meu carrinho</h1>
      <div className="divisor"/>
      {item.map(itens => 
      <div className="card">
        <img src={itens.imageUrl} alt="Candy Images"/>
        <div>
          <p className="item-name">{itens.name.toUpperCase()}</p>
          <p className="item-price1">R$ {itens.listPrice/100}</p>
          <p className="item-price2">R$ {itens.sellingPrice/100}</p>
        </div>
      </div>
      )}
      <div className="divisor"/>
      <div className="total-container">
        <h1>Total</h1>
        <h1>R$ {total / 100}</h1>
      </div>
      <div className="container-free">
        { total / 100 >  10 && (
        <div className="free">Parabéns, sua compra tem frete grátis !</div>
        )}
      </div>
      <div className="divisor"/>
      <div className="container-free">
        <div className="button">Finalizar compra</div>
      </div>
    </div>
  );
}

export default App;
