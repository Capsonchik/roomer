import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setIsEditUser, setIsNewUser} from "@/store/main/mainSlice";
import {Button, Drawer, Form} from "rsuite";
import {User} from "@/types/User";
import {selectCurrentUser, selectIsEditOpen} from "@/store/main/mainSlice.selectors";
import {useState} from "react";


export const EditUserCanvas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector(selectCurrentUser)
  const isOpen = useSelector(selectIsEditOpen)

  const [formValue, setFormValue] = useState<User>({
    name: user ? user.name : '',
    email: user ? user.email : '',
    website: user ? user.website : '',
    username: user ? user.username : '',
  });


  const handleFormSubmit = () => {
    // dispatch(setUsers(formValue))
    dispatch(setIsNewUser(false))
  }

  return (
    <Drawer className={styles.canva} backdrop open={isOpen} onClose={() => dispatch(setIsEditUser(false))}>
      <Drawer.Header>
        <Drawer.Title>Редактирование нового пользователя</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body className={styles.canvaBody}>
        <Form fluid onChange={(formValue: Partial<User>) => setFormValue(formValue as User)} formValue={formValue}>
          <Form.Group controlId="name-9">
            <Form.ControlLabel>Имя и фамилия</Form.ControlLabel>
            <Form.Control name="name"/>
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="name-9">
            <Form.ControlLabel>Юзернейм</Form.ControlLabel>
            <Form.Control name="username"/>
          </Form.Group>
          <Form.Group controlId="email-9">
            <Form.ControlLabel>Почта</Form.ControlLabel>
            <Form.Control name="email" type="email"/>
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="website-9">
            <Form.ControlLabel>Веб-сайт</Form.ControlLabel>
            <Form.Control name="website" type="text" autoComplete="off"/>
          </Form.Group>
          <div className={styles.formBtns}>
            <Button onClick={() => handleFormSubmit()} appearance="primary">Добавить</Button>
            <Button onClick={() => dispatch(setIsEditUser(false))} appearance="subtle">Отмена</Button>
          </div>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};