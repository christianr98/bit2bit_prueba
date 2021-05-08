import React from 'react'
import QuestionElement from './QuestionElement'
import { Title, StyledText, StyledContainer } from './styles/CommonStyles'

const questions = [
    {
        id: 1,
        title: "¿Como alinear un elemento al final de un contenedor flex?",
        detail: "Donec posuere urna at lorem vehicula sodales. Vivamus elementum lacus eget dolor bibendum faucibus. Sed consequat interdum condimentum. Duis sit amet faucibus eros",
        rating: 5,
        nResponses: 20,
    },
    {
        id: 2,
        title: "¿Como centrar elementos horizontalmente en un contenedor?",
        detail: "Sed eget metus eu ante aliquet molestie in quis lorem. Ut eu est suscipit, tempor sapien et, lobortis nisi. Duis vulputate metus felis, quis iaculis libero ultrices non.",
        rating: 5,
        nResponses: 20,
    },
    {
        id: 3,
        title: "¿Como centrar elementos verticalmente en un contenedor?",
        detail: "Etiam nibh dolor, rhoncus a feugiat et, blandit ac dui. Curabitur eu lorem egestas, rhoncus quam sodales, venenatis felis. Morbi facilisis rhoncus turpis in blandit.", 
        rating: 5,
        nResponses: 20,
    }
]

const Home = () => {
    return (
        <StyledContainer>
            <Title>Most Recent Questions</Title>
            {
                questions.map((e, index)=>(
                    <QuestionElement data={e}/>
                ))
            }
        </StyledContainer>
    )
}

export default Home
