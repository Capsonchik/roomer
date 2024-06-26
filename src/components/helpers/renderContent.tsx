import {useSelector} from "react-redux";
import {selectCurrentComponent} from "@/store/main/mainSlice.selectors";
import {Anketa} from "@/components/anketa/Anketa";
import {Home} from "@/components/home/Home";
import {UserCalendar} from "@/components/calendar/UserCalendar";

export const RenderContent = () => {
  const currentComponent = useSelector(selectCurrentComponent)

  const variantsRender = () => {
    switch (currentComponent) {
      case 'anketa':
        return <Anketa/>;
      case 'home':
        return <Home/>;
      case 'calendar':
        return <UserCalendar/>;
      default:
        return 'Выберите шаблон';
    }
  }

  return (
    <div>
      {variantsRender()}
    </div>
  );
};