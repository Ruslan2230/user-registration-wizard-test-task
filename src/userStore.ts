import create from 'zustand';

interface UserState {
    currentStep: number;
    errors: string[];
    reset: () => void;
    submitForm: () => void;
    isSubmitted: boolean;
    setErrors: (errors: string[]) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    currentStep: 0,
    errors: [],
    reset: () => set({ currentStep: 0, errors: [], isSubmitted: false }),
    submitForm: () => set({ isSubmitted: true }),
    isSubmitted: false,
    setErrors: (errors) => set({ errors }),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));