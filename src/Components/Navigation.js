import React from 'react';

const Navigation = () => {
  return (
      <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'lightgray',
      padding: '10px'
    }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none' }}>
        <li>О нас</li>
        <li>Партнеры</li>
        <li>2024г</li>
      </ul>
    </nav>
  );
}

export default Navigation;