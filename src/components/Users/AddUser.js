import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        //Validate if empty
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        
        //Validate Age
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }

        props.onAddUser(enteredUsername,enteredAge);
        //Clear value on screen
        setEnteredUsername("");
        setEnteredAge("");

    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorClickHandler = () => {
        setError(null);
    }

    return(
        <div>
            
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorClickHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
