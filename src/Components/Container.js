import React from 'react';
import Button from './Button'; // Импортируем компонент кнопки

const Container = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Container;