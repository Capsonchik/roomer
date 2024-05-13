import styles from './styles.module.css'
import {Nav, Sidebar, Sidenav} from "rsuite";
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setCurrentComponent} from "@/store/main/mainSlice";

export const SideBar = () => {

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Sidebar className={styles.sideBar}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav>
            {/*<Nav.Menu placement="rightStart" eventKey="1" title={'О проекте'} icon={<DashboardIcon />}>*/}
            {/*  <Nav.Item eventKey="1-1">Здравствуйте</Nav.Item>*/}
            {/*  <Nav.Item eventKey="1-2">Как зарегистрироваться?</Nav.Item>*/}
            {/*  <Nav.Item eventKey="1-3">Как участвовать?</Nav.Item>*/}
            {/*  <Nav.Item eventKey="1-4">О компании</Nav.Item>*/}
            {/*  <Nav.Item eventKey="1-5">Контакты</Nav.Item>*/}
            {/*</Nav.Menu>*/}
            <Nav.Menu placement={'rightStart'} title={'Личный кабинет'} eventKey="2" icon={<GroupIcon />}>
              <Nav.Item onClick={() => dispatch(setCurrentComponent('home'))} eventKey="2-1">Главная</Nav.Item>
              <Nav.Item onClick={() => dispatch(setCurrentComponent('anketa'))} eventKey="2-2">Таблица</Nav.Item>
              <Nav.Item onClick={() => dispatch(setCurrentComponent('echarts'))} eventKey="2-3">График</Nav.Item>
              <Nav.Item eventKey="2-4">Анкеты</Nav.Item>
              <Nav.Item eventKey="2-5">Домашние животные</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="3" title="Участие в проекте" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Дневник</Nav.Item>
              <Nav.Item eventKey="3-2">Личные сообщения(0)</Nav.Item>
              <Nav.Item eventKey="3-3">Отпуска</Nav.Item>
              <Nav.Item eventKey="3-4">Балы</Nav.Item>
              <Nav.Item as={Link} href="/storeMap" eventKey="3-5">Карта магазинов</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="4" title="Подарки" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Корзина</Nav.Item>
              <Nav.Item eventKey="4-2">Каталог подарков</Nav.Item>
              <Nav.Item eventKey="4-3">Подарочная система</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="5" title="Помощь" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="5-1">Как вносить ТОВАРЫ?</Nav.Item>
              <Nav.Item eventKey="5-2">Как вносить УСЛУГИ?</Nav.Item>
              <Nav.Item eventKey="5-3">Как вносить ОБЩЕСТВЕННОЕ ПИТАНИЕ?</Nav.Item>
              <Nav.Item eventKey="5-4">Видео - инструктаж</Nav.Item>
              <Nav.Item eventKey="5-5">Как добавить магазин?</Nav.Item>
              <Nav.Item eventKey="5-6">Типы торговых точек</Nav.Item>
              <Nav.Item eventKey="5-7">Что делать с чеками?</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="6" title="Справка" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="6-1">Система баллов</Nav.Item>
              <Nav.Item eventKey="6-2">Как зачислить деньги на мобильный телефон</Nav.Item>
              <Nav.Item eventKey="6-3">Подарочная система</Nav.Item>
              <Nav.Item eventKey="6-4">Вопросы и ответы</Nav.Item>
              <Nav.Item eventKey="6-5">Как отмечать отпуска?</Nav.Item>
              <Nav.Item eventKey="6-6">Как написать сообщение администрации?</Nav.Item>
              <Nav.Item eventKey="6-7">Программы</Nav.Item>
              <Nav.Item eventKey="6-8">QR Приложение</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="7" title="Мобильное приложение" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="7-1">О мобильном приложении</Nav.Item>
              <Nav.Item eventKey="7-2">Как установить?</Nav.Item>
              <Nav.Item eventKey="7-3">Видео - инструктаж</Nav.Item>
              <Nav.Item eventKey="7-4">Как сканировать в мобильном приложении</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="8" title="Отчеты" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="8-1">Активность</Nav.Item>
              <Nav.Item eventKey="8-2">Покупки</Nav.Item>
              <Nav.Item eventKey="8-3">Новый</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};