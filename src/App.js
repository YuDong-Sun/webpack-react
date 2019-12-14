import React from 'react';
import {hot} from 'react-hot-loader/root';
import './app.css';
import styles from './app.scss';
import small_pic from './assets/1.jpg';
import bigger_pic from './assets/2.jpg';
import Btn from './components/Btn';

function App(){
    return (
        <div>
            <div className={styles.title}>hello react</div>
            <img src={small_pic} alt="" />
            <img src={bigger_pic} alt="" />
            <Btn />
        </div>
    )
}

export default hot(App);