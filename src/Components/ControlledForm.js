import React, { useState } from 'react';
import classes from './ControlledForm.module.css';

const ControlledForm = () => {
	const [userInput, setUserInput] = useState({
		enteredFirstName: '',
		enteredLastName: '',
		enteredEmail: '',
		enteredPhone: ''
	});

	const inputChangeHandler = event => {
		setUserInput({
			...userInput, [event.target.name]: event.target.value,
		});
	};

	const formSaveHandler = (event) => {
		event.preventDefault();
		alert('firstName: '+userInput.enteredFirstName+'\nlastName: '+userInput.enteredLastName+'\nemail: '+userInput.enteredEmail+'\nphone: '+userInput.enteredPhone);
	};

	return(
		<form  onSubmit={formSaveHandler}>
			<div className={classes.formFields}>
				<label>First Name</label><br/>
				<input type='text' name='enteredFirstName' value={userInput.enteredFirstName} onChange={inputChangeHandler}/>
			</div>
			<div className={classes.formFields}>
				<label>Last Name</label><br/>
				<input type='text' name='enteredLastName' value={userInput.enteredLastName} onChange={inputChangeHandler}/>
			</div>
			<div className={classes.formFields}>
				<label>Email</label><br/>
				<input type='email' name='enteredEmail' value={userInput.enteredEmail} onChange={inputChangeHandler}/>
			</div>
			<div className={classes.formFields}>
				<label>Phone Number</label><br/>
				<input type='text' name='enteredPhone' value={userInput.enteredPhone} onChange={inputChangeHandler}/>
			</div>
			<div className={classes.formFields}>
				<button type='submit' className={classes.btn}>Submit</button>
			</div>
		</form>
	);
};

export default ControlledForm;