import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../Firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { updateDoc } from 'firebase/firestore/lite';

const Form = styled.form`
    position : relative;
    width: 80%;
    margin : 0 auto;
`;
const Input = styled.input`
    width : 100%;
    border : 0;
    border-bottom : 1px solid #B799FF;
    color : #B799FF;
    box-sizing :border-box;
    &:focus {
        outline : none;
    }
    &::placeholder {
        color : #d6d6d6;
    }
`;
const Button = styled.button`
    position : absolute;
    right:0;
    bottom :0;
    border : 1px solid #B799FF;
    background : #B799FF;
    color : #fff;
    cursor : pointer;
`;

export default function TodoInput() { 
    const [userData, setUserData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value;
        setUserData(userInput);
    }

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const docRef = await addDoc(collection(db, "todo"), {
                todo: userData,
                status : false,
                createdAt: Date.now(),
            });
            
            await updateDoc(docRef, {
                id: docRef.id
            });
            console.log(userData);

            setUserData("");
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {
                    isLoading ? (
                        <div>Loading...</div>
                    ) : null
                }
                <Input onChange={handleInput} value={userData} type="text" placeholder="할 일을 입력해주세요." />
                <Button type="submit">+</Button>
            </Form>
        </>
    )
}