import {FC} from 'react'
import {Outlet} from "react-router-dom";
import styles from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <Outlet/>
    </div>
  );
};