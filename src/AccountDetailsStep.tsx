import React, {useState} from 'react';
import { TextField } from '@mui/material';
import Step from './Step';

interface AccountDetailsStepProps {
    onNext: () => void;
    onBack: () => void;
}

const AccountDetailsStep: React.FC<AccountDetailsStepProps> = ({ onNext, onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ username: string; password: string }>({
        username: '',
        password: '',
    });

    const validateInputs = () => {
        const newErrors = {
            username: username ? '' : 'Username is required',
            password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
                ? ''
                : 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit',
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleNext = () => {
        if (validateInputs()) {
            onNext();
        }
    };

    return (
        <Step onNext={handleNext} onBack={onBack} isLastStep={true}>
            <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
            />
        </Step>
    );
};

export default AccountDetailsStep;