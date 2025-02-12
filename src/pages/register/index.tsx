import { useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { auth } from '../../services/firebaseConnection';
import { createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

import logoImg from '../../assets/logo.svg';
import { Container } from '../../components/container';
import { Input } from '../../components/input';

const schema = z.object({
    name: z.string().nonempty('O campo nome é obrigatório'),
    email: z.string().email('Insira um e-mail válido').nonempty('O campo e-mail é obrigatório'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty('O campo senha é obrigatório')
})

type formData = z.infer<typeof schema>

export function Register() {
    const { handleInfoUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm<formData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        async function handleLogOut() {
            await signOut(auth);
        }
        handleLogOut();
    }, [])

    async function onSubmit(data: formData) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (user) => {
            await updateProfile(user.user, {
                displayName: data.name
            })
            handleInfoUser({
                name: data.name,
                email: data.email,
                uid: user.user.uid
            })
            console.log('Cadastrado com sucesso!');
            navigate('/dashboard', {replace: true});
        })
        .catch((error) => {
            console.log('Erro ao cadastrar este usuário!');
            console.log(error);
        })
    }
    return (
        <Container>
            <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
                <Link to="/" className="mb-6 max-w-sm w-full">
                    <img src={logoImg} alt="logo do site"  className="w-full"/>
                </Link>
                <form action="" className="bg-white max-w-xl w-full rounded-lg p-4" onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <Input type="text" placeholder="Digite seu nome completo..." name="name" error={errors.name?.message} register={register}/>
                    </div>
                    
                    <div className="mb-3">
                        <Input type="email" placeholder="Digite seu e-mail..." name="email" error={errors.email?.message} register={register}/>
                    </div>

                    <div className="mb-3">
                        <Input type="password" placeholder="Digite sua senha..." name="password" error={errors.password?.message} register={register}/>
                    </div>

                    <button className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">Acessar</button>
                </form>

                <Link to="/login" className="underline">Já possui uma conta? Faça login!</Link>

            </div>

        </Container>
    )
}