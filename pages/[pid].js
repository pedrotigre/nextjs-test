import fs from 'fs/promises';
import path from 'path';

function ProductId(props) {
  const { product } = props;
  return <h1>{product.nome}</h1>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const readFilePath = fs.readFile(filePath);
  const jsonData = await readFilePath;
  const data = JSON.parse(jsonData);

  const product = data.produto.find((product) => product.id === +productId);

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: '1' } },
      { params: { pid: '2' } },
      { params: { pid: '3' } },
    ],
    fallback: false,
  };
}

export default ProductId;
