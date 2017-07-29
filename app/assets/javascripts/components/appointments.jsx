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

	render: function() {
		return (
			<div>
				<AppointmentForm
					input_title={ this.state.title }
					input_appt_time={ this.state.appt_time }
					onUserInput={ this.handleUserInput }
				/>
				<AppointmentsList appointments={ this.state.appointments } />
			</div>
		);
	}
});