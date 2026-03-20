import React from 'react'
import InlinePreloader from '../InlinePreloader'

interface FormButtonProps {
  buttonLabel: string | React.ReactNode
  buttonAction: () => void
  disabled?: boolean
  processing?: boolean
}

const FormButton: React.FC<FormButtonProps> = ({buttonLabel, buttonAction, disabled, processing}) => {
  return (
    <button type='submit' disabled={processing || disabled} onClick={()=>{buttonAction()}} className='w-full px-4 py-3 rounded-lg bg-eee-black text-eee-white border border-eee-black text-md transition duration-200 disabled:cursor-not-allowed hover:bg-eee-dark-gray text-sm flex items-center justify-center cursor-pointer'>{processing ? <InlinePreloader /> : buttonLabel }</button>
  )
}

export default FormButton
