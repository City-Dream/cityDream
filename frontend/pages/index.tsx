import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';

import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>City dream</title>
        <meta name="description" content="City dream"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>City dream</h1>
        <div style={{ marginTop: 40 }}>
          {session ?
            <>
              <p>Signed in as {session?.user?.name}</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
            :
            <>
              <p>Not signed in</p>
              <Link href="./auth/./sign-in">
                <a>
                  Sign in
                </a>
              </Link>
            </>
          }
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
