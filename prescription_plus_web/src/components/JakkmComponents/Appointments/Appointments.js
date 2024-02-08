import React from 'react';
import './Appointments.css'; // Make sure to have corresponding styles in this CSS file

const appointmentsData = [
{ time: "Tomorrow, 9:00 AM", patient: "Jane Smith", reason: "Annual checkup", notes: "No known allergies. History of high blood pressure." },
{ time: "Tomorrow, 10:30 AM", patient: "Robert Johnson", reason: "Flu symptoms", notes: "Allergic to penicillin." },
  // ... Add other appointments here
];

function Appointments() {
return (
    <div className="appointments-container">
        <h1>Appointments</h1>
        <div className="search-bar">
        <input type="text" placeholder="Find a patient" />
    </div>
    <table className="appointments-table">
        <thead>
            <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Reason for visit</th>
            <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {appointmentsData.map((appointment, index) => (
            <tr key={index}>
                <td>{appointment.time}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.notes}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);
}

export default Appointments;