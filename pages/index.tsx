import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../pages/Login'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Health</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Login/>
    </div>
  )
}

export default Home