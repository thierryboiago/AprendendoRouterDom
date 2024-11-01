import {CardContainer, UserPicture, UserInfo, HasInfo, PostInfo, Content, ImageBackground} from './styles'
import {FiThumbsUp} from "react-icons/fi";
export const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://static.vecteezy.com/system/resources/thumbnails/007/623/233/small_2x/3d-illustration-education-tablet-with-education-icons-on-on-hi-tech-background-education-banner-vector.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/58778448?v=4"/>
                    <div>
                        <h4>Thierry</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de react</h4>
                    <p>Projeto feito no curso de react da dio<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p><FiThumbsUp /> 10</p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}
