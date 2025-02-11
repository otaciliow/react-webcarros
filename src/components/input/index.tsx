import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IInputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

export function Input({type, placeholder, name, register, rules, error}: IInputProps) {
    return (
        <>
            {error && (
                <label htmlFor={name} className="px-2 min-h-11 text-red-500">{error}</label>
            )}
            <input type={type} placeholder={placeholder} name={name} id={name} {...register(name, rules)} className="w-full border-2 rounded-md h-11 px-2"/>
        </>
    )
}