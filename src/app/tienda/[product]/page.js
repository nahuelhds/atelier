export default function Product(props) {
  const { product } = props.params;
  console.log("esto es props", props);
  return <h1>Pagina de producto: {product}</h1>;
}
