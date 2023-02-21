import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../styles/useEffectOne.module.css'

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
            console.log(number);
            setNumber(number + 50);
        },[])

    return (
        <>
        <div className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <div className={styles.desc}>
                UseEffectTwo
            </div>
            <div className={styles.desc}>
           {number}     
            </div>
            </div>
        </>
    )
}