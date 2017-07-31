var AppointmentForm = React.createClass({
	handleChange: function(e) {
		var name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	},

	handleSubmit: function(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	},

	setApptTime: function(e) {
		const name = 'appt_time',
			obj = {};
		if (obj[name] = e.toDate()) {
			this.props.onUserInput(obj);
		}
	},

	render: function() {
		const inputProps = {
			name: 'appt_time'
		};

		return (
			<div>
				<h2>Make a new Appointment</h2>
				<form onSubmit={ this.handleSubmit }>
					<input
						name='title'
						placeholder='Appointment Title'
						value={ this.props.title }
						onChange={ this.handleChange }
					/>
					<Datetime
						inputProps={inputProps}
						input={ false }
						onChange= { this.setApptTime }
						open={ true }
						value={ this.props.appt_time }
					/>
					<input type='submit' value='Make Appointment' />
				</form>
			</div>
		);
	}
});