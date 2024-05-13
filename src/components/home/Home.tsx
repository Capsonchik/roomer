import styles from './home.module.css';
import {Container, Heading, Loader} from "rsuite";
import {useSelector} from "react-redux";
import {selectLoader, selectNewUsers} from "@/store/main/mainSlice.selectors";


export const Home = () => {
  const users = useSelector(selectNewUsers)
  const loader = useSelector(selectLoader)


  return (
    <Container>
      <Heading level={4}>Главный блок</Heading>
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

        </div>
        <div className={styles.users}>
          <Heading className={styles.header} level={4}>Активные юзеры</Heading>
          <div className={styles.usersBlock}>
            {users && users.map(user => {
              return (
                <div style={{display: 'flex', justifyContent: 'space-between'}} key={user.id}>
                  <span className={styles.userItem}>{user.name}</span>
                  <span className={styles.userItem}>{user.username}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};