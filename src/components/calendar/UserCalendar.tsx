import styles from './styles.module.css'
import {Badge, Button, Calendar, Container, CustomProvider, Panel, Popover, Whisper} from "rsuite";
import {setIsNewUser} from "@/store/main/mainSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {ruRU} from "rsuite/locales";



export const UserCalendar = () => {
  const dispatch = useDispatch<AppDispatch>()

  function getTodoList(date: any) {
    const day = date.getDate();

    switch (day) {
      case 10:
        return [
          { time: '10:30', title: 'Встреча IT' },
          { time: '12:00', title: 'Обед' }
        ];
      case 15:
        return [
          { time: '19:30', title: 'Встреча СА' },
          { time: '12:30', title: 'Мит с клиентом' },
          { time: '02:00', title: 'Обсуждение дизайна' },
          { time: '05:00', title: 'Сдача продукта тестировщикам' },
          { time: '06:30', title: 'Отчет' },
          { time: '10:00', title: 'Выход в сторону дома' }
        ];
      default:
        return [];
    }
  }

  function renderCell(date: any) {
    const list = getTodoList(date);
    const displayList = list.filter((item: any, index: number) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item: any, index: number) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>Показать еще {moreCount}</a>
          </Whisper>
        </li>
      );

      return (
        <ul className={styles.calendarTodoList}>
          {displayList.map((item: any, index: number) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <Container>
      <Panel header="Календарь" className={styles.panel}>
        <div className={styles.panelBlock}>
          <Button onClick={() => dispatch(setIsNewUser(true))}>Запланировать событие</Button>
        </div>
      </Panel>
      <CustomProvider locale={ruRU}>
        <Calendar bordered renderCell={renderCell}/>
      </CustomProvider>
    </Container>
  );
};