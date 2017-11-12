import react from 'react';
import Head from 'next/head';
import GlobalHead from '../component/_head';
import Chat from '../component/chat/index.js';

export default () => (
  <div>
    <GlobalHead></GlobalHead>
    <Head>
      <title>index</title>
    </Head>
    <h1>index</h1>
    <Chat></Chat>
  </div>
)
