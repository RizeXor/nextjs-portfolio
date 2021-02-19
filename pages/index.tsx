import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Navaneeth</title>
      </Head>

      <main>
        {/* Hero */}
        <header className={styles.hero_container}>
          <h1 className={styles.hero_heading}>
            Hi,
            <br />
            I'm Navaneeth
          </h1>
          <h3 className="tagline" style={{ marginBottom: "1rem" }}>
            Software Developer
          </h3>
          <div className={styles.btn_group}>
            <a href="#contact" className="btn btn_primary">
              Contact Us
            </a>
            <a href="#projects" className="btn btn_secondary">
              View Projects
            </a>
          </div>
        </header>

        <Image src="/waves.svg" layout="responsive" width={1440} height={144} />

        {/* Backend */}

        <section className={styles.backendContainer}>
          <div>
            <Image src="/code.svg" width={48} height={48} />
            <h3 className={styles.heading}>Backend</h3>
            <p className="light" style={{ lineHeight: 1.6 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              impedit officia placeat, facere et sint praesentium! Magnam,
              architecto deserunt, sint aut saepe quibusdam cum omnis nisi eos
              distinctio, accusamus officia.
            </p>
          </div>
          <div className={styles.backend2}>
            <div className={styles.imgParent}>
              <div className={styles.imgChild}>
                <Image
                  src="/golang.svg"
                  width={48}
                  height={48}
                  layout="fixed"
                />
                <span style={{ marginLeft: "1rem" }}>Golang (Fiber)</span>
              </div>
              <div className={styles.imgChild}>
                <Image src="/next.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>Next.js</span>
              </div>
              <div className={styles.imgChild}>
                <Image src="/py.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>Python (Django)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Frontend */}

        <section className={styles.frontendContainer}>
          <div className={styles.frontend1}>
            <div className={styles.imgParent2}>
              <div className={styles.imgChild2}>
                <Image src="/react.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>React.js</span>
              </div>
              <div className={styles.imgChild2}>
                <Image src="/html.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>Semantic HTML</span>
              </div>
              <div className={styles.imgChild2}>
                <Image src="/css.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>CSS3</span>
              </div>
              <div className={styles.imgChild2}>
                <Image src="/js.svg" width={48} height={48} layout="fixed" />
                <span style={{ marginLeft: "1rem" }}>JavaScript (ES6)</span>
              </div>
            </div>
          </div>
          <div className={styles.frontend2}>
            <Image src="/code.svg" width={48} height={48} />
            <h3 className={styles.heading}>Frontend</h3>
            <p className="light" style={{ lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              placerat sollicitudin consectetur. Pellentesque habitant morbi
              tristique senectus et netus et
            </p>
          </div>
        </section>

        {/* DevOps */}

        <section className={styles.devOpsContainer}>
          <div>
            <Image src="/code.svg" width={48} height={48} />
            <h3 className={styles.heading}>DevOps</h3>
            <p className="light" style={{ lineHeight: 1.6 }}>
              Tools I use for devops / coding. Deploying and Scaling apps
            </p>
          </div>
          <div>
            <ul className={styles.devOpsImgParent}>
              <li className={styles.devOpsImgChild}>
                <Image
                  src="/vercel.svg"
                  width={48}
                  height={48}
                  layout="fixed"
                />
                <span>Vercel</span>
              </li>
              <li className={styles.devOpsImgChild}>
                <Image
                  src="/netlify.svg"
                  width={48}
                  height={48}
                  layout="fixed"
                />
                <span>Netlify</span>
              </li>
              <li className={styles.devOpsImgChild}>
                <Image src="/vim.svg" width={48} height={48} layout="fixed" />
                <span>VIM</span>
              </li>
              <li className={styles.devOpsImgChild}>
                <Image
                  src="/docker.svg"
                  width={48}
                  height={48}
                  layout="fixed"
                />
                <span>Docker</span>
              </li>
              <li className={styles.devOpsImgChild}>
                <Image src="/linux.svg" width={48} height={48} layout="fixed" />
                <span>Linux</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}

        <section className={styles.projects} id="projects">
          <div className="container">
            <h3 className={styles.heading}>Projects</h3>
            <ul>
              <li>
                <div className={styles.projectsCard}>
                  <h5>GoLang JWT Authentication</h5>
                  <p>
                    An REST API thats provides JWT authentication functionality
                    built with golang and gofiber
                  </p>
                  <button className="btn btn_primary">Demo</button>
                  <button className="btn btn_secondary">Source Code</button>
                </div>
              </li>
              <li>
                <div className={styles.projectsCard}>
                  <h5>Spring Boot CRUD</h5>
                  <p>A simple CRUD REST API with Spring Boot</p>
                  <button className="btn btn_primary">Demo</button>
                  <button className="btn btn_secondary">Source Code</button>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footerContainer} id="contact">
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.linksContainer}>
            <a
              href="https://www.github.com/"
              className={styles.link}
              target="_blank"
            >
              <Image src="/github.svg" width={48} height={48} layout="fixed" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              className={styles.link}
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width={48}
                height={48}
                layout="fixed"
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
