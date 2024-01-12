import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.css";
import MenuIcon from "../../../public/menu-svgrepo-com.svg";
import CloseMenuIcon from "../../../public/close-svgrepo-com.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Image
        className={`${styles.menuOpenIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        src={isOpen ? CloseMenuIcon : MenuIcon}
        alt="menu"
        width={50}
      />
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link href={"/"} className={styles.headerButton} onClick={toggleMenu}>
          Home
        </Link>
        <Link
          href={"/missions"}
          className={styles.headerButton}
          onClick={toggleMenu}
        >
          Missions
        </Link>
        <Link
          href={"/rockets"}
          className={styles.headerButton}
          onClick={toggleMenu}
        >
          Rockets
        </Link>
        <Link
          href={"/providers"}
          className={styles.headerButton}
          onClick={toggleMenu}
        >
          Providers
        </Link>
      </nav>
    </header>
  );
};

export default Header;
