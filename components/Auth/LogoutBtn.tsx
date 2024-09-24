"use client"

import {signOut} from "next-auth/react";
import styles from '@/public/styles/LoginBtn.module.css';

export default function LogoutBTN () {


    return (
            <img src={'./img/logout.png'} onClick={() => signOut()} className={styles.btn} alt={"Logout"}/>
    )
}