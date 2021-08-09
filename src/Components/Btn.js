const Btn = (props) => {
	return(
		<button className='btn' onClick={props.onClick}>{props.btnText}</button>
	);
};

export default Btn;