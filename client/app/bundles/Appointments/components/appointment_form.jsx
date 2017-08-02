import React, { Component } from 'react';
import Label from './label';
import Datetime from 'react-datetime';

export default class AppointmentForm extends React.Component {
	handleChange (e) {
		const name = e.target.name;
		const obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	}

	handleSubmit (e) {
		e.preventDefault();
		this.props.onFormSubmit();
	}

	setApptTime (e) {
		const name = 'appt_time',
			obj = {};
		if (obj[name] = e.toDate()) {
			this.props.onUserInput(obj);
		}
	}

	render () {
		const inputProps = {
			name: 'appt_time'
		};

		return (
			<div>
				<h2>Make a new Appointment</h2>
				<Label label='Enter a title, date and time' />
				<form onSubmit={ (e) => this.handleSubmit(e) }>
					<input
						name='title'
						placeholder='Appointment Title'
						value={ this.props.title }
						onChange={ (e) => this.handleChange(e) }
						className='appointment-title'
					/>
					<Datetime
						inputProps={inputProps}
						input={ false }
						onChange= { (e) => this.setApptTime(e) }
						open={ true }
						value={ this.props.appt_time }
					/>
					<input type='submit' value='Make Appointment' className='submit-button' />
				</form>
			</div>
		);
	}
}