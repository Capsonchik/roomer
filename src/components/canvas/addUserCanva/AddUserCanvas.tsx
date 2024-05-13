import styles from './styles.module.css';
import {Button, Drawer, Form} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {selectIsAddNewUser} from "@/store/main/mainSlice.selectors";
import {setIsNewUser} from "@/store/main/mainSlice";
import {useState} from "react";
import {User} from "@/types/User";

export const AddUserCanvas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useSelector(selectIsAddNewUser)

  const [formValue, setFormValue] = useState<any>({
    name: '',
    email: '',
    website: '',
  })

  const handleFormSubmit = () => {
    // dispatch(setUsers(formValue))
    dispatch(setIsNewUser(false))
  }

  return (
    <Drawer backdrop open={isOpen} onClose={() => dispatch(setIsNewUser(false))}>
      <Drawer.Header>
        <Drawer.Title>Добавление нового пользователя</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <Form fluid onChange={(formValue: Partial<User>) => setFormValue(formValue as User)} formValue={formValue}>
          <Form.Group controlId="name-9">
            <Form.ControlLabel>Имя и фамилия</Form.ControlLabel>
            <Form.Control name="name"/>
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="email-9">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email"/>
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="website-9">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="website" type="text" autoComplete="off"/>
          </Form.Group>
          <div className={styles.formBtns}>
            <Button onClick={() => handleFormSubmit()} appearance="primary">Добавить</Button>
            <Button onClick={() => dispatch(setIsNewUser(false))} appearance="subtle">Отмена</Button>
          </div>
        </Form>
      </Drawer.Body>
    </Drawer>
  )
};