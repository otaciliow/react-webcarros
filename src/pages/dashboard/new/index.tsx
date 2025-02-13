import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/panelheader";
import { Input } from "../../../components/input";

import { FiUpload } from "react-icons/fi";

const schema = z.object({
    name: z.string().nonempty('Este campo é obrigatório'),
    model: z.string().nonempty('Este campo é obrigatório'),
    year: z.string().nonempty('Este campo é obrigatório'),
    km: z.string().nonempty('Este campo é obrigatório'),
    price: z.string().nonempty('Este campo é obrigatório'),
    city: z.string().nonempty('Este campo é obrigatório'),
    whatsapp: z.string().min(1, 'O telefone é obrigatório').refine((value) => /^(\d{10,11})$/.test(value.replace(/\D/g, '')), {
        message: 'Número de telefone inválido'
    }),
    description: z.string().nonempty('Este campo é obrigatório'),
})

type FormData = z.infer<typeof schema>;

export function New() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <Container>
            <DashboardHeader/>
            <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
                <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
                    <div className="absolute cursor-pointer">
                        <FiUpload size={30} color="#000"/>
                    </div>
                    <div className="cursor-pointer">
                        <input type="file" accept="image/*" className="opacity-0 cursor-pointer" />
                    </div>
                </button>

            </div>

            <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2 mb-12">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <Input type="text" placeholder="Ex.: Argo" name="name" error={errors.name?.message} register={register} label="Nome do Carro" />
                    </div>

                    <div className="mb-3">
                        <Input type="text" placeholder="Ex.: 1.0 Flex Plus Manual" name="model" error={errors.model?.message} register={register} label="Modelo do Carro" />
                    </div>

                    <div className="flex w-full mb-3 flex-row items-center gap-4">
                        <div className="w-full">
                            <Input type="text" placeholder="Ex.: 2016/2016" name="year" error={errors.year?.message} register={register} label="Ano do Carro" />
                        </div>

                        <div className="w-full">
                            <Input type="text" placeholder="Ex.: 20.000" name="km" error={errors.km?.message} register={register} label="Km Rodados" />
                        </div>
                    </div>

                    <div className="flex w-full mb-3 flex-row items-center gap-4">
                        <div className="w-full">
                            <Input type="text" placeholder="Ex.: 29.000" name="price" error={errors.price?.message} register={register} label="Preço" />
                        </div>

                        <div className="w-full">
                            <Input type="text" placeholder="Ex.: Campo Grande - RJ" name="city" error={errors.city?.message} register={register} label="Cidade" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <Input type="text" placeholder="Ex.: 11988887777" name="whatsapp" error={errors.whatsapp?.message} register={register} label="Telefone / WhatsApp" />
                    </div>

                    <div className="mb-3">
                        <div className="flex items-center gap-2">
                            <label htmlFor="" className="font-medium">Descrição</label>
                            {errors.description && <p className="text-red-500">{errors.description?.message}</p>}
                        </div>
                        <textarea name="description" id="description" className="border-2 w-full rounded-md h-24 px-2" {...register("description")} placeholder="Digite a descrição completa sobre o carro" />
                    </div>

                    <button className=" w-full h-10 rounded-md bg-zinc-900 text-white font-medium">Cadastrar</button>

                </form>
            </div>
        </Container>
    )
}