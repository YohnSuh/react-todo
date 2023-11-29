import styled from "styled-components";
import Nav from "../component/nav";
import Todo from "../component/todo";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export default function Home() {
    return (
        <Wrapper>
            <Nav></Nav>
            <Todo></Todo>
        </Wrapper>
    )
}