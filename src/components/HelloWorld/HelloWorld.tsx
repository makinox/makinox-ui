import React from 'react';

function HelloWorld({ message }: { message: string }) {
  return <span style={{ color: 'green' }}>{message}</span>;
}

export default HelloWorld;
