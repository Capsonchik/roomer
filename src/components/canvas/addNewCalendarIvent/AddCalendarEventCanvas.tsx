import styles from './styles.module.css'
import {setIsAddNewEvent} from "@/store/main/mainSlice";
import {Button, ButtonToolbar, DatePicker, Drawer, Form} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {selectIsAddNewEvent} from "@/store/main/mainSlice.selectors";

export const AddCalendarEventCanvas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useSelector(selectIsAddNewEvent)

  return (
    <Drawer className={styles.canva} backdrop open={isOpen} onClose={() => dispatch(setIsAddNewEvent(false))}>
      <Drawer.Header>
        <Drawer.Title>Планирование мероприятия</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body className={styles.canvaBody}>
        <Form fluid>
          <Form.Group controlId="name">
            <Form.ControlLabel>Название</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.ControlLabel>Дата</Form.ControlLabel>
            <DatePicker style={{width: '100%'}}/>
          </Form.Group>

          <Form.Group>
            <ButtonToolbar>
              <Button onClick={() => dispatch(setIsAddNewEvent(false))} appearance="primary">Создать</Button>
              <Button onClick={() => dispatch(setIsAddNewEvent(false))} appearance="default">Отменить</Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};