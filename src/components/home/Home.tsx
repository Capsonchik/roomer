import styles from './home.module.css';
import {Container, Loader} from "rsuite";
import {useSelector} from "react-redux";
import {selectLoader, selectNewUsers} from "@/store/main/mainSlice.selectors";
import {TestChart} from "@/components/charts/testChart/TestChart";
import {PieChart} from "@/components/charts/pieChart/PieChart";


export const Home = () => {
  const users = useSelector(selectNewUsers)
  const loader = useSelector(selectLoader)


  return (
    <Container>
      <div className={styles.statBlocks}>
        <div className={styles.statBlock}>
          {!loader ? `Всего пользователей: ${users && users.length}` : <Loader/>}
        </div>
        <div className={styles.statBlock}>
          Статистика
        </div>
        <div className={styles.statBlock}>
          Статистика
        </div>
      </div>
      <div className={styles.chartsBlock}>
        <div className={styles.charts}>
          <TestChart/>
        </div>
        <div className={styles.pie}>

          <PieChart/>
        </div>
      </div>
    </Container>
  );
};