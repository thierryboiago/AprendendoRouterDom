import {
    BuscarInputContainer,

    Container,
    Input,
    Menu,
    MenuRight,
    Row,
     Wrapper
} from './styles'
import {Button} from "../Button";

export const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                   <img height="30px" src="https://c5gwmsmjx1.execute-api.us-east-1.amazonaws.com/prod/dados_processo_seletivo/logo_empresa/119818/LOGO-DIO-COLOR.png_name_20221031-2831-ekn5hh.png" alt="Logo da dio"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}
