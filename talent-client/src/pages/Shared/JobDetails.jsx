import React from 'react';
import '../../App.css';
import {Typography} from "@mui/material";

const JobDetails = (props) => {
    return(
        <div>
            <p><strong>Job ID:</strong> {props.job.id}</p>
            <p><strong>Job Title:</strong> {props.job.job_title}</p>
            <p><strong>Department:</strong> {props.job.department}</p>
            <p><strong>Date Posted:</strong> {props.job.datelisted}</p>
            <p><strong>Job Status:</strong> {props.job.listing_status}</p>
            <p><strong>Job Description:</strong> {props.job.job_description}</p>
            <p><strong>Additional Information:</strong> {props.job.additional_information}</p>

            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
            <button className="apply-button">Apply</button>
        </div>
    );
}

export default JobDetails;