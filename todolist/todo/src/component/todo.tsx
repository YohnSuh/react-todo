import styled from "styled-components"
import TodoInput from "./todoInput";
import TodoList from "./todoList";

const Wrap = styled.div`
    width : 400px;
    margin : 30px auto;
    text-align : center;
    background : #fff;
    border-radius :20px;
    padding: 35px 15px;
    & > h2 {
        margin : 0;
        margin-bottom : 20px;
        color : #B799FF;
    }
`;

export default function Todo() {
    return (
        <Wrap>
            <h2>To Do List</h2>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </Wrap>
    )
}