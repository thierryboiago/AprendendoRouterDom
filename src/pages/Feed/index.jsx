import {Link} from 'react-router-dom';
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Container, TitleHighlight, Title, Column } from './styles'
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";
const Feed = () => {
    return <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Thierry Boiago" image="https://avatars.githubusercontent.com/u/58778448?v=4"/>
                <UserInfo percentual={80} nome="Thierry Boiago" image="https://avatars.githubusercontent.com/u/58778448?v=4"/>
                <UserInfo percentual={80} nome="Thierry Boiago" image="https://avatars.githubusercontent.com/u/58778448?v=4"/>
                <UserInfo percentual={80} nome="Thierry Boiago" image="https://avatars.githubusercontent.com/u/58778448?v=4"/>
            </Column>
        </Container>

    </>
}

export {Feed}