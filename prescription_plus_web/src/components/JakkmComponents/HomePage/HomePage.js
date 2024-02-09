import React from 'react';
import styles from './HomePage.css'; // Assuming you have a CSS file for styles

function HomePage() {
return (
    <div className={styles["app"]}>
        <header className={styles["app-header"]}>
            {/* Navigation and top bar */}
            <nav>
            <div className={styles["logo"]}>UniHealth</div>
            <div className={styles["menu"]}>
                <a href="#book">Book an appointment</a>
                <a href="#doctors">Doctor</a>
                <a href="#clinics">Clinic</a>
                <button className={styles["text-button"]}>Text</button>
            </div>
            </nav>

            {/* Main Search Section */}
            <section className={styles["search-section"]}>
            <h1>Unified healthcare management system for patients, doctors and hospitals</h1>
            <div className={styles["search-box"]}>
                <input type="text" placeholder="Find a doctor, clinic, hospital" />
                <button>Search</button>
            </div>
            </section>
        </header>

      {/* Features Section */}
        <section className={styles["features"]}>
            <h2>Features</h2>
            <p>We offer a comprehensive set of features for hospitals, doctors, and patients, including prescription generation, calendar management, slot booking, and more</p>
            <div className={styles["feature-cards"]}>
            {/* Feature Cards */}
            <div className={styles["card"]}>Prescription Generation Tool</div>
            <div className={styles["card"]}>Calendar Management Tool</div>
            <div className={styles["card"]}>Slot Booking Tool</div>
            <div className={styles["card"]}>View Past Medical Records Tool</div>
            <div className={styles["card"]}>Patient Visibility Front</div>
            </div>
        </section>

      {/* For Doctors Section */}
        <section className={styles["for-doctors"]}>
            <h2>For Doctors</h2>
            <p>Manage calendars, take appointments, view patient details and medical history etc.</p>
            <button>Get started</button>
            <button>Learn more</button>
        </section>

      {/* For Patients Section */}
        <section className={styles["for-patients"]}>
            <h2>For Patients</h2>
            <p>Discover hospitals/doctors, book appointments, view medical history and analysis etc.</p>
            <button>Get started</button>
            <button>Learn more</button>
        </section>
    </div>
);
}

export default HomePage;