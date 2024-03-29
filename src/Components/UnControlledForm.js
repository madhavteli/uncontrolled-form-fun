import React, { useRef } from 'react';
import classes from './UncontrolledForm.module.css';

const UncontrolledForm = () => {
	const firstName =  useRef();
	const lastName =  useRef();
	const email =  useRef();
	const phone =  useRef();

	const formSaveHandler = (event) => {
		event.preventDefault();
		alert(`
         firstName: ${firstName.current.value}
         lastName: ${lastName.current.value}
         email: ${email.current.value}
         phone: ${phone.current.value}
      `);
	};

	return(
		<form  onSubmit={formSaveHandler}>
			<div className={classes.formFields}>
				<label>First Name</label><br/>
				<input type='text' name='firstName' ref={firstName}/>
			</div>
			<div className={classes.formFields}>
				<label>Last Name</label><br/>
				<input type='text' name='lastName' ref={lastName}/>
			</div>
			<div className={classes.formFields}>
				<label>Email</label><br/>
				<input type='email' name='email' ref={email}/>
			</div>
			<div className={classes.formFields}>
				<label>Phone Number</label><br/>
				<input type='text' name='phone'  ref={phone}/>
			</div>
			<div className={classes.formFields}>
				<button type='submit' className={classes.btn}>Submit</button>
			</div>
		</form>
	);
};

export default UncontrolledForm;