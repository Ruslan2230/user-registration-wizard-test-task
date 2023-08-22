import React, {useState} from 'react';
import { TextField } from '@mui/material';
import Step from './Step';

interface AddressDetailsStepProps {
    onNext: () => void;
    onBack: () => void;
}

const AddressDetailsStep: React.FC<AddressDetailsStepProps> = ({ onNext, onBack }) => {
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zipCode, setZipCode] = useState<string>('');
    const [errors, setErrors] = useState<{ street: string; city: string; state: string; zipCode: string }>({
        street: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const validateInputs = () => {
        const newErrors = {
            street: street ? '' : 'Street is required',
            city: city ? '' : 'City is required',
            state: state ? '' : 'State is required',
            zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode) ? '' : 'Invalid zip code format',
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
        <Step onNext={handleNext} onBack={onBack} isLastStep={false}>
            <TextField
                label="Street"
                fullWidth
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                error={!!errors.street}
                helperText={errors.street}
            />
            <TextField
                label="City"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={!!errors.city}
                helperText={errors.city}
            />
            <TextField
                label="State"
                fullWidth
                value={state}
                onChange={(e) => setState(e.target.value)}
                error={!!errors.state}
                helperText={errors.state}
            />
            <TextField
                label="Zip Code"
                fullWidth
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
            />
        </Step>
    );
};

export default AddressDetailsStep;