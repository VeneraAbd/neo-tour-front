import styles from "./PageBlock.module.css";


const PageBlock = ({ heading, subHeading, children, id, className = "" }) => {
  return (
    <section className={`container ${styles.section} ${className}`} id={id}>
      {heading ? (
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>{heading}</h2>
          {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default PageBlock;
