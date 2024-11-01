import {Link, useNavigate} from 'react-router-dom';
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Container,  Title, CriarText, EsqueciText, Row, Wrapper, TitleLogin, SubTitleLogin, Colunm} from './styles';
import {Input} from "../../components/Input";
import {Column} from "../../components/Header/styles";
import {MdEmail, MdLock} from 'react-icons/md';
const Login = () => {
    const navigate = useNavigate();

    const handleClickSigin = () =>{
        navigate('/feed')
    }
    return <>
        <Header/>
        <Container>
            <Colunm>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rapido nas empresas mais desejadas.
                </Title>


            </Colunm>
            <Column>
                <Wrapper>
                    <TitleLogin> Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>} />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSigin} type="button"/>

                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>

    </>
}

export {Login}