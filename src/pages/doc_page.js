import Link from "next/link";
import Navbar from "@/components/navbar";
import styles from "@/styles/doc_page.module.css";
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
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/react">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>JavaScript</h1>
              <p className={styles.text}>Scripting language for the web</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/javascript">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Node.js</h1>
              <p className={styles.text}>Backend development</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/node">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>GitHub</h1>
              <p className={styles.text}>Git commands</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/github">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>Native</h1>
              <p className={styles.text}>Native-Expo commands</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/native">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.wrapper}>
              <div className={styles.bannerImage}></div>
              <h1 className={styles.heading}>AWS</h1>
              <p className={styles.text}>AWS commands</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={`${styles.btn} ${styles.outline}`}>
                Watch
              </button>
              <Link href="/docs/aws">
                <button className={`${styles.btn} ${styles.fill}`}>
                  Read Docs
                </button>
              </Link>
            </div>
            <img
              src="/butterfly.png"
              alt="Butterfly"
              className={styles.butterfly}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocPage;
