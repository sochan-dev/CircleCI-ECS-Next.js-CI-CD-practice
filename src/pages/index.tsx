import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type TestExpressMysql = {
  msg: string;
  result: {
    id: number;
    name: string;
  }[];
};
const Home: NextPage = () => {
  const [testExpressMysql, setTestExpressMysql] = useState<TestExpressMysql>({
    msg: 'まだですね!',
    result: [],
  });
  useEffect(() => {
    fetch('http://ecs-sample-alb-backend-1424607722.ap-northeast-1.elb.amazonaws.com').then(
      async (data) => {
        //setTestExpressMysql(data.body);
        const newData: TestExpressMysql = await data.json();
        setTestExpressMysql(newData);
      },
    );
  }, []);

  return (
    <div>
      <h1>Build Nextjs×Express×Mysql service with AWS ECS and CircleCI </h1>
      <p>{testExpressMysql.msg}</p>
      {testExpressMysql.result.map((data, key) => (
        <div key={key}>
          <span>{data.id}</span>:<span>{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
