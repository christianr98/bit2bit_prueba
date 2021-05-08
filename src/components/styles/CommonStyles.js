import styled from "styled-components";

const StyledContainer = styled.div`    
    width: 80%;
    height: 100vh;
    margin: auto;
    margin-top: 4rem;
    //background-color: whitesmoke;
`

const Title = styled.h3`
    margin-top: 2rem;
    color: ${(props) => props.theme.colorPrimary };;
    font-size: 22px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    line-height: 28.5px;
    margin-bottom: 8px;
`

const StyledText = styled.p`
    color: ${(props) =>
    props.color === "dark" ? 'black' : 'white'};
    font-family: 'Quicksand', sans-serif;
    font-weight: ${(props) =>
    props.type === "bold" ? '800' : '400'};
    font-size: ${(props) =>
    props.size === "small" ? '12px' : '16px'};
`


export {Title, StyledText, StyledContainer}