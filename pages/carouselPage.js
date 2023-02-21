import Carousel from "../components/carousel"
import Link from "next/link"
import styles from '../styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <div className={styles.main}>
        <Link className={styles.link} href="/">Home</Link>
        <Carousel/>
        </div>
        </>
    )
}