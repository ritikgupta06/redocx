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
              <h1 className={styles.heading}>Toyota Supra</h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
              <button className={`${styles.btn} ${styles.fill}`}>BUY NOW</button>
            </div>
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          <div className={styles.card}>
            {/* Duplicate the same structure for each card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Card 2</h1>
              <p className={styles.text}>
                Another car model here.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
              <button className={`${styles.btn} ${styles.fill}`}>BUY NOW</button>
            </div>
            <img src="/butterfly.png" alt="Butterfly" className={styles.butterfly} />
          </div>
          <div className={styles.card}>
            {/* Third card */}
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Card 3</h1>
              <p className={styles.text}>
                Yet another car model.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
              <button className={`${styles.btn} ${styles.fill}`}>BUY NOW</button>
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
