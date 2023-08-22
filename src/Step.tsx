import React from 'react';
import { Button } from '@mui/material';

interface StepProps {
    children: React.ReactNode;
    onNext: () => void;
    onBack: () => void;
    isLastStep: boolean;
}

const Step: React.FC<StepProps> = ({ children, onNext, onBack, isLastStep }) => {
    return (
        <div>
            {children}
            <Button onClick={onBack} disabled={isLastStep}>
                Back
            </Button>
            <Button onClick={onNext} variant="contained" color="primary">
                {isLastStep ? 'Submit' : 'Next'}
            </Button>
        </div>
    );
};

export default Step;