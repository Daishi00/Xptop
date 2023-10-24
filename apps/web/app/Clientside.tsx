'use client';

import { useEffect, useState } from 'react';
import { trpc } from './trpc';

export default function Clientside() {
  const [data, setData] = useState('');

  useEffect(() => {
    trpc.hello.query({ name: 'Radoslav' }).then((response) => {
      setData(response);
    });
  });

  return <div>I am {data}</div>;
}
