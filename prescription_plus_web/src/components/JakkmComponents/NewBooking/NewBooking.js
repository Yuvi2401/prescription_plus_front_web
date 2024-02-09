import React, { useState } from 'react';
import './NewBooking.css'; // Make sure to create a CSS file for styling
import PatientBooking from '../PatientBookings/PatientBooking';

const NewBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Name');
  const options = ['Name', 'Hospital', 'Specialization'];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="main-container">
        <div className="full-container">
            <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggling}>
                {selectedOption}
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                {options.map((option) => (
                    <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={option}>
                    {option}
                    </li>
                ))}
                </ul>
            )}
            </div>
            <div className='text-container'>
                <label>
                    {selectedOption} {selectedOption != 'Name' ? 'Name' : ''}
                    <input type="text" placeholder={selectedOption} />
                </label>
            </div>
            <div className='text-container'>
                <button className="save-btn">SEARCH</button>
            </div>
        </div>
    </div>

);
};

export default NewBooking;