import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
  const { data } = props;
  return (
    <ul>
      {data.produto.map((produto) => (
        <li key={produto.id}>
          <Link href={`/${produto.id}`}>{produto.nome}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log('Regenerating...');
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const readFilePath = fs.readFile(filePath);

  const jsonData = await readFilePath;
  const data = JSON.parse(jsonData);

  return { props: { data }, revalidate: 30 };
}

export default HomePage;
