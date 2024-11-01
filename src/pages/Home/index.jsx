import {Link, useNavigate} from 'react-router-dom';
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Container,  TextContent, Title, TitleHighlight} from './styles'
const Home = () => {
    const navigate = useNavigate();

    const handleClickSigin = () =>{
        navigate('/login')
    }
    return <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <br/>
                    <TitleHighlight>
                        Implemente
                        <br/>
                    </TitleHighlight>
                o seu futuro global agora!
                </Title>
                <TextContent>
                    +1.750 cursos, bootcamps, projetos e formações nas carreiras de back-end, front-end, mobile, games, data,
                    inteligência artificial & cloud para elevar o seu nível profissional e conquistar oportunidades nas empresas
                    mais desejadas do mundo
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSigin}/>
            </div>
            <div>
                <img src="https://hermes.dio.me/public/components/pages/home/header/banner-play.png" alt="imagem principal" width="60%"/>
            </div>
        </Container>

    </>
}

export {Home}