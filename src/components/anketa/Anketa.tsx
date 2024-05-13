import styles from './styles.module.css'
import {Button, Container, Panel, Placeholder} from "rsuite";
import {NewUserModal} from "@/components/modals/newUserModal/NewUserModal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIsNewUser} from "@/store/main/mainSlice";
import {TableComponent} from "@/components/table/TableComponent";
import {selectUsers} from "@/store/main/mainSlice.selectors";

export const Anketa = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(selectUsers)

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