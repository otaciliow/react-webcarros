import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import logoImg from '../../assets/logo.svg';
import { Container } from '../../components/container';
import { Input } from '../../components/input';

const schema = z.object({
    email: z.string().email('Insira um e-mail válido').nonempty('O campo e-mail é obrigatório'),
    password: z.string().nonempty('O campo senha é obrigatório')
})

type formData = z.infer<typeof schema>

export function Login() {

    const { register, handleSubmit, formState: {errors} } = useForm<formData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    function onSubmit(data: formData) {
        console.log(data);
    }
    return (
        <Container>
            <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
                <Link to="/" className="mb-6 max-w-sm w-full">
                    <img src={logoImg} alt="logo do site"  className="w-full"/>
                </Link>
                <form action="" className="bg-white max-w-xl w-full rounded-lg p-4" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-3">
                        <Input type="email" placeholder="Digite seu e-mail..." name="email" error={errors.email?.message} register={register}/>
                    </div>

                    <div className="mb-3">
                        <Input type="password" placeholder="Digite sua senha..." name="password" error={errors.password?.message} register={register}/>
                    </div>

                    <button className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">Acessar</button>
                </form>
            </div>

        </Container>
    )
}