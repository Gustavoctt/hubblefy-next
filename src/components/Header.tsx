import styles from '../styles/components/Header.module.css';

export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="logoHeader.svg" alt="Move"/>
            </div>
        </div>
    )
}