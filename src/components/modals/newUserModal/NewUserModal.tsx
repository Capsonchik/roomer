import {useDispatch, useSelector} from "react-redux";
import {selectIsAddNewUser, selectUsers} from "@/store/main/mainSlice.selectors";
import {Modal, Form, Button} from "rsuite";
import {AppDispatch} from "@/store/store";
import {setIsNewUser, setUsers} from "@/store/main/mainSlice";
import {useState} from "react";
import {User} from "@/types/User";

export const NewUserModal = () => {
  const isOpen = useSelector(selectIsAddNewUser)
  const dispatch = useDispatch<AppDispatch>()

  const [formValue, setFormValue] = useState<User>({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    dispatch(setUsers(formValue))
    dispatch(setIsNewUser(false))
  }

  return (
    <>
      <Modal open={isOpen} onClose={() => dispatch(setIsNewUser(false))} size="xs">
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={(formValue: Partial<User>) => setFormValue(formValue as User)} formValue={formValue}>
          <Form.Group controlId="name-9">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name"/>
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSubmit()} appearance="primary">
            Confirm
          </Button>
          <Button onClick={() => dispatch(setIsNewUser(false))} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};