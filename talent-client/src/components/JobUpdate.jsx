import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobUpdate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [salary, setSalary] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const navigate = useNavigate();

    return (
        <Container maxWidth="xs" className="job-update-container">
            <Typography variant="h4" component="h2" gutterBottom align="center">Job Update</Typography>
            <form>
                <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    label="Location"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <TextField
                    label="Job Type"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                />
                <TextField
                    label="Salary"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <TextField
                    label="Experience"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <TextField
                    label="Skills"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />

                <Button variant="contained" >Submit</Button>
                <Button variant="contained" onClick={() => navigate('/')}>Cancel</Button>
                <Button variant="contained" >Delete</Button>
            </form>
        </Container>
    );
}

