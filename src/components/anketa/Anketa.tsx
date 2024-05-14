import styles from './styles.module.css'
import {Button, Container, Panel} from "rsuite";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIsNewUser} from "@/store/main/mainSlice";
import {TableComponent} from "@/components/table/TableComponent";

export const Anketa = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Container>
      <Panel header="Список пользователей" className={styles.panel}>
        <div className={styles.panelBlock}>
          <Button onClick={() => dispatch(setIsNewUser(true))}>Добавить новую анкету</Button>
          <Button>Параметры</Button>
        </div>
      </Panel>
      <TableComponent/>
    </Container>
  );
};