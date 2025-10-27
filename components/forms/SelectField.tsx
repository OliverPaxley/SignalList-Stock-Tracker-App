import { Label } from '@radix-ui/react-label'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Controller } from 'react-hook-form'

const SelectField = ({name , label, placeholder , options, control, error, required = false }: SelectFieldProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>
            {label}
        </Label>

        <Controller 
            name={name}
            control={control}
            rules={{
                required: required ? `Please select ${label.toLowerCase()}` : false,
            }}
            render={({field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="select-trigger">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-800 border-gray-600 text-white'>
                        {options && options.map((option) => (
                            <SelectItem value={option.value} key={option.value} className='focus:bg-gray-600 focus:text-white'>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    {error && <p className='text-sm text-red-500'>{error.message}</p>}
                </Select>
            )}  
        />
    </div>
  )
}

export default SelectField