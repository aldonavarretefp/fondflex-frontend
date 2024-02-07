import React from 'react'

interface DocumentUploadFormProps {
    nextStep: () => void,
    setFormState: Function,
    formState: any
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ nextStep, setFormState, formState }) => {
  return (
    <div>DocumentUploadForm</div>
  )
}

export default DocumentUploadForm