import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
// import React, {useEffect} from "react";
import styled from "styled-components"
import { db } from "../Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons/faSquareXmark";
import Todo from "./todo";
import { updateDoc, doc as firestoreDoc } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const Lists = styled.div`
    text-align: right;
    & .allBtn {margin-right: 10%;}
    & button {border: 1.5px solid #B799FF; background: white;border-radius: 5px;color: #B799FF;}
    & button:hover {background: #B799FF; color: white;}
    & .allDeleteBtn {text-align:right;font-size:10px;}
    & .trashBtn {font-size: 10px; margin-left: 5px;}
`;
const List = styled.div`
    width : 80%;
    margin : 0 auto;
    font-size : 14px;
    text-align : left;
    padding: 8px 0;
    & .todoWrap {display:flex; justify-content:space-between;align-items:center;}
    & .todoCont {display:flex;align-items:center;font-size:10px;}
    & .todoCheck {appearance : none;padding:7px;border: 1.5px solid #B799FF;border-radius:100%;margin-right:10px;}
    & .todoCheck:checked {
        background:#B799FF;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
    & input[type="checkbox"]:focus {outline: none;}
    & input[type="text"] {border: 1.5px solid #B799FF;font-size:10px;width: 170px;border-radius: 5px;}
    & input[type="text"]:focus {outline: none;}
    & .todoWidth {width:150px;max-width:240px;word-break:breack-all;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;}
    & button {font-size:10px;border:0;background:unset; color:#B799FF;cursor:pointer;}
    & .todoContchecked {color:#B799FF;text-decoration: line-through;display:flex;align-items:center;font-size:10px;}
    & .todoBtn {display:flex;}
    & .allDelete {appearance: none;padding:1px 3.5px;border: 1.5px solid #B799FF;border-radius:2px;}
    & .allDelete:checked {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(183, 153, 255)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
`;
interface Todo {
    checked?: any;
    id: string;
    todo?: string;
    status?: boolean,
    createdAt?: number;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [editingTodo, setEditingTodo] = useState<{id:string; text:string} | null>(() => null);
    const [editingTodoText, setEditingTodoText] = useState("");
    const [isEditingTodo, setIsEditingTodo] = useState<string | null> (null);

    const handleTodoUpdate = async (id:string, text: string) => {
        setEditingTodo({id, text});
        setEditingTodoText(text);
        setIsEditingTodo(id);
    }

    // db 연동
    const onEditSubmit = async (id:string) => {
        if (!editingTodoText) {
            alert("할 일을 적어주세요!");
            return;
        }
        const todoDocRef = firestoreDoc(db, 'todo', id);
        try {
            await updateDoc(todoDocRef, {
                todo: editingTodoText,
            });    
        } catch (error) {
            console.error(error);
        }
        setEditingTodoText("");
        setEditingTodo(null);
        setIsEditingTodo(null);
    }
    // 할 일 목록 업데이트 순으로 보이게
    useEffect(() => {
        const todoCollection = collection(db, 'todo');
        // order by
        const orderByTodo = query(todoCollection, orderBy('createdAt', 'desc'));
        const todoSnapshot = onSnapshot(orderByTodo, (querySnapshot) => {
            const updatedTodos: Todo[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTodos(updatedTodos);
        });

        // Clean up the subscription when the component unmounts
        return () => todoSnapshot();
    }, []);

    // 밑줄 긋기
    const checkedTodo = async (id: string) => {
        // 로컬 상태 업데이트
        setTodos((prevTodos) =>
            prevTodos.map((todoItem) =>
                todoItem.id === id
                    ? { ...todoItem, checked: !todoItem.checked }
                    : todoItem
            )
        );

        // Firestore에서 문서 업데이트
        const todoDocRef = firestoreDoc(db, 'todo', id);

        try {
            await updateDoc(todoDocRef, {
                checked: !todos.find((todo) => todo.id === id)?.checked,
            });
        } catch (error) {
            console.error(error);
        }
    };


    // 삭제 기능
    const onDelete = async (id: string) => {
        const deletCheck = window.confirm("정말로 삭제하시겠습니까?");

        if(deletCheck) {
            // 로컬 상태 업데이트
            setTodos(todos.filter(todoItem => todoItem.id !== id));
        
            // Firestore에서 문서 삭제
            const todoDocRef = doc(db, 'todo', id);
        
            try {
                await deleteDoc(todoDocRef);
            } catch (error) {
                console.error(error);
            }
        }
    };

    // 전체 삭제 기능
    const [isDeletingAll, setIsDeletingAll] = useState(false);


    return(
        <Lists>
            {
                todos.map((todoItem, i) => {
                    return <List key={`list${todoItem.createdAt}${i}`}>
                        <label data-id={todoItem.id}>
                            <div className="todoWrap">
                                <span className={"todoCont" + (todoItem.checked ? "checked" : "")}>
                                    {editingTodo && editingTodo.id === todoItem.id ? (
                                        // 수정 중인 Todo
                                        <>
                                            <input type="text"
                                                value={editingTodoText}
                                                onChange={(e) => setEditingTodoText(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        onEditSubmit(todoItem.id);
                                                    }
                                                } } />
                                            <button className="editingCheckBtn"
                                                onClick={() => onEditSubmit(todoItem.id)}
                                            >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {/* 수정 안 할 때 */}
                                            <input onClick={() => checkedTodo(todoItem.id)}
                                                className="todoCheck"
                                                type="checkbox"
                                                checked={todoItem.checked} />
                                            <span className="todoWidth">{todoItem.todo}</span>
                                        </>
                                    )}
                                </span>
                                <span className="todoBtn">
                                    {!todoItem.checked && isEditingTodo !== todoItem.id && (
                                        <button type="button"
                                            className="update"
                                            onClick={() => todoItem && todoItem.todo && handleTodoUpdate(todoItem.id, todoItem.todo)}><FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    )}
                                    <button type="button" className="delete" onClick={() => onDelete(todoItem.id)}><FontAwesomeIcon icon={faSquareXmark} /></button>
                                    {isDeletingAll && (
                                        <input type="checkbox"
                                               className="allDelete"
                                        />
                                    )}
                                </span>
                            </div>
                        </label>
                    </List>
                })
            }
            <span className="allBtn">
                <button type="button"
                        className="allDeleteBtn"
                        onClick={() => setIsDeletingAll(!isDeletingAll)}>
                            {isDeletingAll ? ("취소") : (<FontAwesomeIcon icon={faTrashCan}/>)}
                </button>
                {isDeletingAll && (
                    <button type="button"
                            className="trashBtn"
                    >
                        삭제
                    </button>
                )}
            </span>
        </Lists>
    )
}