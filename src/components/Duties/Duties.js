import React from 'react';
import './Duties.css'; // Styling file

const Duties = () => {
  return (
    <section className="key-duties">
      <div className="key-duty" id="clean">
        <h2>Data Cleaning and Preprocessing</h2>
        <p>Prepare and clean raw data for analysis by removing duplicates, handling missing data, and transforming data formats.</p>
      </div>
      <div className="key-duty" id="analyze">
        <h2>Data Analysis and Modeling</h2>
        <p>Analyze data using statistical methods, machine learning techniques, and predictive models to derive insights and make data-driven decisions.</p>
      </div>
      <div className="key-duty" id="visualize">
        <h2>Data Visualization</h2>
        <p>Present data findings and insights visually through charts, graphs, and dashboards to communicate complex information effectively.</p>
      </div>
    </section>
  );
};

export default Duties;
