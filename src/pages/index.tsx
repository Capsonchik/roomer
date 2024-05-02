import { Inter } from "next/font/google";
import {Container,Footer, Content} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import {MainHeader} from "@/components/mainHeader/MainHeader";
import {SideBar} from "@/components/sideBar/SideBar";
import {RenderContent} from "@/components/helpers/renderContent";




export default function Home() {
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
