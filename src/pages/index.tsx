import { Header } from "../components/Header";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { SlideBanner } from "../components/SlideBanner";
import { FeatureContent } from "../components/FeatureContent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.</title> 
      </Head>
      <Header/>
      <SlideBanner/>
      <FeatureContent/>
    </div>
  )
}
