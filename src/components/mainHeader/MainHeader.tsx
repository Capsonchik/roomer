import styles from './styles.module.css';
import {Avatar, Header, Heading} from "rsuite";
import NoticeIcon from '@rsuite/icons/Notice';
import CalendarIcon from '@rsuite/icons/Calendar';
import BarChartIcon from '@rsuite/icons/BarChart';


export const MainHeader = () => {


  return (
    <Header className={styles.header}>
      <Heading level={2}>Logo</Heading>
      <div className={styles.userBlock}>
        <div className={styles.icons}>
          <BarChartIcon className={styles.icon}/>
          <NoticeIcon className={styles.icon}/>
          <CalendarIcon className={styles.icon}/>
        </div>
        <Avatar src="https://i.pravatar.cc/150?u=2" circle />
      </div>
    </Header>
  );
};