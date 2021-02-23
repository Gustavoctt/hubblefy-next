import styles from '../styles/components/FeatureContent.module.css';

export function FeatureContent(){
    return(
      <div className={styles.featureContentContainer}>
        <div className={styles.featureContentLeft}>
          <h1>Smart Watch</h1>
    
          <span>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't 
            look even slightly believable. </span>
    
          <div className={styles.featureContentButton}>
            <button>Ler mais</button>
          </div>
        </div>
    
        <div className={styles.featureContentRight}>
          <img src="images/image-smart.svg" alt="SmartWatch"/>
        </div>
      </div>
    );
}