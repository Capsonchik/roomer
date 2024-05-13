import { Inter } from "next/font/google";
import {Container,Footer, Content} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import {MainHeader} from "@/components/mainHeader/MainHeader";
import {SideBar} from "@/components/sideBar/SideBar";
import {RenderContent} from "@/components/helpers/renderContent";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {useEffect} from "react";
import {fetchGetNewUsers} from "@/store/main/user.actions";




export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchGetNewUsers())
  }, [dispatch]);


  return (
    <Container>
      <MainHeader/>
      <Container>
        <SideBar/>
        <Content style={{padding: "10px"}}>
          <RenderContent/>
        </Content>
      </Container>
      <Footer>Footer</Footer>
    </Container>
  );
}
