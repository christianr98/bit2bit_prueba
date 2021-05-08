import React from 'react'
import styled from 'styled-components'
import {StyledContainer, StyledText, Title} from './styles/CommonStyles'

const answers = [
    {
        id: 1,
        rating: 2,
        detail: "Sed tristique eros ac metus egestas, ac iaculis nisi lobortis. Duis et nisi tincidunt, vulputate libero in, porttitor arcu. Donec accumsan nunc ac nunc elementum ultrices. Morbi rutrum fermentum feugiat. Praesent mattis nec ipsum sed tincidunt. Duis porttitor ligula leo, dapibus placerat enim tempor aliquet. Mauris rutrum commodo orci. In hac habitasse platea dictumst. Nunc dapibus erat purus. Aenean interdum sollicitudin ultrices. Aenean nisl ipsum, mattis non mollis vel, efficitur at massa. Ut a ultricies metus, in ullamcorper diam."
    },
    {
        id: 2,
        rating: 5,
        detail: "Donec egestas diam magna, a suscipit nisl blandit vitae. Morbi quis nulla egestas magna sodales tempor nec ac ligula. In tempus tellus posuere nisi tincidunt sodales. Phasellus sed feugiat lectus."
    }
]

const CurrentQuestion = styled.div`
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    .rating {
        margin: 0.5rem 3rem 0.5rem 1rem;
        border: 1px solid gray;        
        text-align: center;
        align-items: center;
        height: fit-content;
        padding: 0.5rem;
        min-width: 2rem;
        display: flex;
        flex-direction: column;
    }
    :hover {
        cursor: pointer;
        box-shadow: 0px 1px 5px silver;
    }
`

const AnswerElement = styled.div`
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    .rating {
        margin: 0.5rem 3rem 0.5rem 1rem;
        border: 1px solid gray;        
        text-align: center;
        align-items: center;
        height: fit-content;
        padding: 0.5rem;
        min-width: 2rem;
        display: flex;
        flex-direction: column;
    }

`

const Question = ({location}) => {
    const data = location.state ? location.state[0] : null
    console.log(data)
    return (
        data &&
        <StyledContainer>
            <Title>{data.title}</Title>
            <CurrentQuestion>
                <div className="rating">                
                    <div className="score">{data.rating}</div>
                    <StyledText size="small" color="dark">rating</StyledText>
                </div>
                <StyledText color="dark">
                    {data.detail}
                </StyledText>
            </CurrentQuestion>
            <StyledText color="dark">{`${answers.length} answers`}</StyledText>
            <React.Fragment>
                {
                    answers.map((e, index) => (
                        <AnswerElement>
                            <div className="rating">
                                {e.rating}
                            </div>
                            <StyledText color="dark">
                                {e.detail}
                            </StyledText>
                        </AnswerElement>
                    ))
                }
            </React.Fragment>
        </StyledContainer>
    )
}

export default Question
