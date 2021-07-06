import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");

    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();

        const domUserName = nameInputRef.current.value;
        const domUserAge = ageInputRef.current.value;

        //Validate if empty
        if(domUserName.trim().length === 0 || domUserAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        
        //Validate Age
        if(+domUserAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }

        props.onAddUser(domUserName,domUserAge);
        //Clear value on screen

        // setEnteredUsername("");
        // setEnteredAge("");
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";


    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorClickHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorClickHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        // onChange={usernameChangeHandler} 
                        // value={enteredUsername}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age" >Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        // onChange={ageChangeHandler} 
                        // value={enteredAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
