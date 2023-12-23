import React from 'react'
import SegmentedPicker from '../../components/SegmentedPicker'
import { StepIndicator } from '../../components/StepIndicator'

const RegisterPage = () => {
  return (
    <div>
        <StepIndicator currentStep={1} totalSteps={3} />
    </div>
  )
}

export default RegisterPage