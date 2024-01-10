import Link from "next/link";
import Image from "next/image";
import EarthPicture from "../../../public/images/earth-full.png";
import ISSPicture from "../../../public/images/international-space-station.svg";
import styles from "./footer.module.css";

const Header = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.crop}>
        <p className={styles.footerText}>
          This website is currently under development, many features may not
          work as intended
        </p>
        <Image src={EarthPicture} alt="Earth" className={styles.earth} />
        <div className={styles.orbit}>
          <Image src={ISSPicture} alt="ISS" className={styles.orbiter} />
        </div>
      </div>
    </footer>
  );
};

export default Header;
