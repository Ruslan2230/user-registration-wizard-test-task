import React from 'react';
import { Button, Typography } from '@mui/material';
import { useUserStore } from './userStore';

const SummaryStep: React.FC = () => {
    const { errors, reset, submitForm } = useUserStore(); // Import the necessary methods from the store

    const handleConfirm = () => {
        if (errors.length === 0) {
            submitForm();
        }
    };

    return (
        <div>
            <Typography variant="h5">Review and Submit</Typography>
            {/* Display a summary of user's entered information */}
            {/* For example: */}
            <div>
                <Typography>First Name: John</Typography>
                <Typography>Last Name: Doe</Typography>
                {/* Display other fields */}
            </div>
            <Button onClick={handleConfirm} variant="contained" color="primary">
                Confirm Submission
            </Button>
        </div>
    );
};

export default SummaryStep;