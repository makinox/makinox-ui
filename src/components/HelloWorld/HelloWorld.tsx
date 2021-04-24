export type HelloWorldType = {
  message?: string;
};

function HelloWorld({ message }: HelloWorldType) {
  return <span style={{ color: 'green' }}>{message}</span>;
}

export default HelloWorld;
