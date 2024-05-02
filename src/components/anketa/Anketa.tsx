import styles from './styles.module.css'
import {Button, Container} from "rsuite";
import {NewUserModal} from "@/components/modals/newUserModal/NewUserModal";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIsNewUser} from "@/store/main/mainSlice";

export const Anketa = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Container>
      <Button onClick={() => dispatch(setIsNewUser(true))}>Добавить новую анкету</Button>
      <NewUserModal/>
    </Container>
  );
};