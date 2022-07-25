import fs from 'fs/promises';
import path from 'path';

function ProductId(props) {
  const { product } = props;
  return <h1>{product.nome}</h1>;
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.produto.find((product) => product.id === +productId);
  if (!product) return { notFound: true };

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const params = data.produto.map((produto) => {
    return {
      params: {
        pid: `${produto.id}`,
      },
    };
  });

  return {
    paths: params,
    fallback: 'blocking',
  };
}

export default ProductId;
