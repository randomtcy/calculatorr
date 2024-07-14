import React, { useState } from 'react';
function App() {
  const [price, setPrice] = useState(0);
  const [convertedPrice, setConvertedPrice] = useState(0);

  const handlePriceChange = (event) => {
    const newPrice = parseFloat(event.target.value);
    setPrice(newPrice);
    setConvertedPrice(newPrice * 6.5);
  };

  return (
    <div style={{
      backgroundColor: '#00CED1',
      color: '#fff',
      textAlign: 'center',
      padding: '40px',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <label htmlFor="price" style={{ marginRight: '10px' }}>Enter the price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handlePriceChange}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        />
        <p>Converted price: {convertedPrice.toFixed(3)}</p>
      </div>
    </div>
  );
}

export default App;
