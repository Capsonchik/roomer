import {Button, Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {selectIsAddNewUser} from "@/store/main/mainSlice.selectors";
import {setIsNewUser} from "@/store/main/mainSlice";

export const AddUserCanvas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useSelector(selectIsAddNewUser)

  const handleSubmit = () => {

  }

  return (
    <>
      <Drawer backdrop open={isOpen} onClose={() => dispatch(setIsNewUser(false))}>
        <Drawer.Header>
          <Drawer.Title>Добавление нового пользователя</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => dispatch(setIsNewUser(false))}>Cancel</Button>
            <Button onClick={handleSubmit} appearance="primary">Confirm</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          modal here
        </Drawer.Body>
      </Drawer>
    </>
  );
};