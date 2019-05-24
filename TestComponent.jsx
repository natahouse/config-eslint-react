import React from 'react';
import PropTypes from 'prop-types';

export const TestComponent = ({ teste }) => {
  const obj = {
    one: 1,
    two: 2,
  };

  return (
    <div>
      <div prop1={obj}>
        Seu saldo:
        <p
          prop1={1}
          prop2="teste"
          prop3={teste}
        >
          Teste
        </p>
      </div>
    </div>
  );
};

TestComponent.propTypes = {
  teste: PropTypes.string.isRequired,
};

export default TestComponent;
