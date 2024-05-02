import {useSelector} from "react-redux";
import {selectCurrentComponent} from "@/store/main/mainSlice.selectors";
import {Anketa} from "@/components/anketa/Anketa";

export const RenderContent = () => {
  const currentComponent = useSelector(selectCurrentComponent)

  const variantsRender = () => {
    switch (currentComponent) {
      case 'anketa':
        return <Anketa/>;
      case '':
        return '<Frame2/>';

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