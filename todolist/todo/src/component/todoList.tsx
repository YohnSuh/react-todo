import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { db } from "../Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons/faSquareXmark";
import Todo from "./todo";

const Lists = styled.div``;
const List = styled.div`
    width : 80%;
    margin : 0 auto;
    font-size : 14px;
    text-align : left;
    padding: 8px 0;
    & .todoWrap {display:flex; justify-content:space-between;align-items:center;}
    & .todoCont {display:flex;align-items:center;font-size:10px;}
    & input {appearance : none;padding:7px;border: 1.5px solid #B799FF;border-radius:100%;margin-right:10px;}
    & input:checked {
        background:#B799FF;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
    & button {font-size:10px;border:0;background:unset; color:#B799FF;cursor:pointer;}
`;

interface Todo {
    id: string;
    todo?: string;
    status?: boolean,
    createdAt?: number;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    // const navigate = useNavigate();

    useEffect(() => {
        const todoLists =async () => {
            const todoCollection = collection(db, 'todo');
            const todoSnapshot = await getDocs(todoCollection);

            
            try {
                const todoData: Todo[] = todoSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setTodos(todoData);
                
            } catch(err) {
                
            } finally {
                // navigate("/");
            }
          
        }

        todoLists();
    }, []);
    const [checked, setChecked] = useState(false);
    function inputChecked() {
        if(checked === false) {setChecked(true);}
        else {setChecked(false);}
    }

    return(
        <Lists>
            {
                todos.map((todoItem, i) => {
                    return  <List key={`list${todoItem.createdAt}${i}`}>
                                <label data-id={todoItem.id}>
                                    <div className="todoWrap">
                                        <span className="todoCont" >
                                            {/* <input type="checkbox" checked={`${todoItem.status}`} onChange={inputChecked}/>{todoItem.todo} */}
                                            <input type="checkbox" onChange={inputChecked}/>{todoItem.todo}
                                        </span>
                                        <span className="todoBtn">
                                            <button className="update"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                            <button className="delete"><FontAwesomeIcon icon={faSquareXmark}/></button>
                                        </span>
                                    </div>
                                </label>
                            </List>
                })
            }
        </Lists>
    )
}