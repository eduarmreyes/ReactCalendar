class AppointmentsController < ApplicationController
  def index
  	@appointment = Appointment.new
  	@appointments = get_appointments_ordered_by_appt_time
  end

  def create
  	appointment = Appointment.new(appointment_params)

  	if appointment.save
  		render json: appointment
  	else
  		render json: appointment.errors, status: :unprocessable_entity
  	end
  end

  private
  def appointment_params
  	params.require(:appointment).permit(:title, :appt_time)
  end

  def get_appointments_ordered_by_appt_time
  	Appointment.order('appt_time ASC')
  end
end
