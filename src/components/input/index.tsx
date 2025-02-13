import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IInputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
    label?: string;
}

export function Input({type, placeholder, name, register, rules, error, label}: IInputProps) {
    return (
        <>
            <div className="flex items-center gap-2">
                <label htmlFor={name} className={label ? "font-medium" : "hidden"}>{label}</label>
                {error && (
                    <p className="text-red-500 m-0">{error}</p>
                )}
            </div>
            <input type={type} placeholder={placeholder} name={name} id={name} {...register(name, rules)} className="w-full border-2 rounded-md h-11 px-2"/>
        </>
    )
}