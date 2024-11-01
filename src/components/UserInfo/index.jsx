import {Container, UserPicture, Progress, NameText} from "./styles";

export const UserInfo = ({nome, image, percentual}) => {
    return (
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}
