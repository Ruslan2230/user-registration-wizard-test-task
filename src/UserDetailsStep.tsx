import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Step from './Step';

interface UserDetailsStepProps {
    onNext: () => void;
    onBack: () => void;
}

const UserDetailsStep: ({onNext, onBack}: { onNext: any; onBack: any }) => any  = ({ onNext, onBack }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const validateInputs = () => {
        const newErrors = {
            firstName: firstName ? '' : 'First name is required',
            lastName: lastName ? '' : 'Last name is required',
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email format',
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleNext = () => {
        if (validateInputs()) {
            onNext();
        }
    }

        return (
            <Step onNext={ handleNext} onBack={onBack} isLastStep={false}>
                <TextField
                    label="First Name"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />
                <TextField
                    label="Last Name"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
            </Step>
        );
    };


export default UserDetailsStep;