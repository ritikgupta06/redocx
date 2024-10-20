import Navbar from "@/components/navbar";
import styles from '@/styles/doc_page.module.css';  // Assuming the CSS file is named DocPage.module.css
import Footer from "@/components/footer";

const DocPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>React js</h1>
              <p className={styles.text}>
               Frontend development <br />

              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>Watch</button>
              <button className={`${styles.btn} ${styles.fill}`}>Read Docs</button>
            </div>
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          <div className={styles.card}>
            {/* Duplicate the same structure for each card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Java Script</h1>
              <p className={styles.text}>
                Script for Website
              </p>
            </div>
            <div className={styles.buttonWrapper}>
            <button className={`${styles.btn} ${styles.outline}`}>Watch</button>
            <button className={`${styles.btn} ${styles.fill}`}>Read Docs</button>
            </div>
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          <div className={styles.card}>
            {/* Duplicate the same structure for each card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Java Script</h1>
              <p className={styles.text}>
                Script for Website
              </p>
            </div>
            <div className={styles.buttonWrapper}>
            <button className={`${styles.btn} ${styles.outline}`}>Watch</button>
            <button className={`${styles.btn} ${styles.fill}`}>Read Docs</button>
            </div>
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          
          <div className={styles.card}>
            {/* Third card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Node js</h1>
              <p className={styles.text}>
                Backend development
              </p>
            </div>
            <div className={styles.buttonWrapper}>
            <button className={`${styles.btn} ${styles.outline}`}>Watch</button>
            <button className={`${styles.btn} ${styles.fill}`}>Read Docs</button>
            </div>
            
          
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          <div className={styles.card}>
            {/* Third card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Node js</h1>
              <p className={styles.text}>
                Backend development
              </p>
            </div>
            <div className={styles.buttonWrapper}>
            <button className={`${styles.btn} ${styles.outline}`}>Watch</button>
            <button className={`${styles.btn} ${styles.fill}`}>Read Docs</button>
            </div>
            
          
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DocPage;
