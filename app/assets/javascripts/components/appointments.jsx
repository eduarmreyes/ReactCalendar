var Appointments = React.createClass({
	getInitialState() {
		return {
			appointments: this.props.appointments,
			title: '',
			appt_time: '',
		}
	},

	handleUserInput: function(o) {
		this.setState(o);
	},

	handleFormSubmit: function() {
		const appointment = {
			title: this.state.title,
			appt_time: this.state.appt_time,
		};
		$.post('/appointments',
			{
				appointment: appointment
			}
		)
		.done(function(data) {
			this.addNewAppointment(data);
		}.bind(this));
	},

	addNewAppointment: function(appointment) {
		const appointments = React.addons.update(this.state.appointments, {
			$push: [appointment]
		});
		this.setState({
			appointments: appointments.sort(function(a,b) {
				return new Date(a.appt_time) - new Date(b.appt_time);
			})
		});
	},

	render: function() {
		return (
			<div>
				<AppointmentForm
					title={ this.state.title }
					appt_time={ this.state.appt_time }
					onUserInput={ this.handleUserInput }
					onFormSubmit={ this.handleFormSubmit }
				/>
				<AppointmentsList appointments={ this.state.appointments } />
			</div>
		);
	}
});