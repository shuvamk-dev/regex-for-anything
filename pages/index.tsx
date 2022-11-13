import React from 'react'
import AutoComplete from '../components/AutoComplete'

import styles from './index.module.css'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div>RegEX.</div>
      <AutoComplete />
    </div>
  )
}

export default Home