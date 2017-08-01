class AppointmentForm extends React.Component {
	handleChange (e) {
		const name = e.target.name;
		obj = {};
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
				<form onSubmit={ this.handleSubmit.bind(this) }>
					<input
						name='title'
						placeholder='Appointment Title'
						value={ this.props.title }
						onChange={ this.handleChange.bind(this) }
						className='appointment-title'
					/>
					<Datetime
						inputProps={inputProps}
						input={ false }
						onChange= { this.setApptTime.bind(this) }
						open={ true }
						value={ this.props.appt_time }
					/>
					<input type='submit' value='Make Appointment' className='submit-button' />
				</form>
			</div>
		);
	}
}