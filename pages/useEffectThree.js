import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../styles/useEffectThree.module.css'

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>
            <div className={styles.main}>
                <Link className={styles.link} href="/">Home</Link>
                <div>
                    <button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me</button>
                </div>
                <div className={styles.desc}>
                    useEffectThree
                </div>
                <div className={styles.desc}>
                    {value}
                </div>
            </div>
        </>
    )
}