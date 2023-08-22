import React from 'react';
import { Container, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { useUserStore } from './userStore';
import UserDetailsStep from './UserDetailsStep';
import AddressDetailsStep from './AddressDetailsStep';
import AccountDetailsStep from './AccountDetailsStep';
import SummaryStep from './SummaryStep';

function getSteps() {
  return ['User Details', 'Address Details', 'Account Details'];
}

function App() {
  const { currentStep, isSubmitted, nextStep, prevStep } = useUserStore();
  const steps = getSteps();

  const renderStepContent = (step: number) => {
    if (step === steps.length) {
      return <SummaryStep />;
    }

    switch (step) {
      case 0:
        return <UserDetailsStep onNext={nextStep} onBack={prevStep} />;
      case 1:
        return <AddressDetailsStep onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <AccountDetailsStep onNext={nextStep} onBack={prevStep} />;
      default:
        return null;
    }
  };

  return (
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            User Registration Wizard
          </Typography>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
            ))}
          </Stepper>
          {renderStepContent(currentStep)}
          {isSubmitted && (
              <Typography variant="h6">Thank you for your submission!</Typography>
          )}
        </Paper>
      </Container>
  );
}

export default App;