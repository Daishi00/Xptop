import Clientside from './Clientside';
import { trpc } from './trpc';

export default async function Home() {
  const response = await trpc.hello.query({ name: 'Tom' });

  return (
    <div>
      {response}
      <Clientside />
    </div>
  );
}
