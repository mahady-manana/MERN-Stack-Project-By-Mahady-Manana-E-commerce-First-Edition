import React from "react"


const Input = ({name, value, placeholder, type, onChange, labelName}) => {
	return (
		<div className="form-group">
		  <label htmlFor={name}>{labelName}</label>
		  <input className="form-control"
		  		 type={type}
		  		 name = {name}
		  		 value = {value}
		  		 onChange = {onChange}
		  		 placeholder = {placeholder}
		  />
		</div>
	)
}

const Select = ({name, value, placeholder, type, onChange, labelName, optionName, optionValue, optionName2, optionValue2,optionName3, optionValue3}) => {
	return (
		<div className="form-group">
		  <label htmlFor={name}>{labelName}</label>
		  <select className="form-control"
		  		 type={type}
		  		 name = {name}
		  		 value = {value}
		  		 onChange = {onChange}
		  		 placeholder = {placeholder}
		  ><option value={optionValue}>{optionName}</option>
		   <option value={optionValue2}>{optionName2}</option>
		   <option value={optionValue3}>{optionName3}</option>
		   </select>
		</div>
	)
}

const Textarea = ({name, value, placeholder, type, onChange, labelName, rows, col}) => {
	return (
		<div className="form-group">
		  <label htmlFor={name}>{labelName}</label>
		  <textarea className="form-control"
		  		 type="type"
		  		 name = {name}
		  		 value = {value}
		  		 onChange = {onChange}
		  		 placeholder = {placeholder}
		  		 rows = {rows || 5}
		  		 col = {col || 10}
		  ></textarea>
		</div>
	)
}


export {
	Input,
	Textarea,
	Select
}