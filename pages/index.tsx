import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type TestExpressMysql = {
  id: number;
  name: string;
}[];
const Home: NextPage = () => {
  console.log('h');
  console.log('fd');
  const [testExpressMysql, setTestExpressMysql] = useState<TestExpressMysql>([
    { id: 0, name: 'まだ' },
  ]);
  useEffect(() => {
    fetch('http://localhost:4000').then(async (data) => {
      setTestExpressMysql(await data.json());
    });
  }, []);

  return (
    <div>
      {testExpressMysql.map((data, key) => (
        <div key={key}>
          <span>{data.id}</span>:<span>{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
