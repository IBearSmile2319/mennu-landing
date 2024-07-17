import { useState } from "preact/hooks";
import Typography from "../ui/typography/Typography";
import { URL_API } from '../../config/config';
import imgBackground from "../../assets/img/negocios/negocios-HERO.png";
import { colors } from "../ui/typography/types";

interface IForm {
    nombre: string;
    telefono: string;
    tipoNegocio: string;
    direccion: string;
}

const tipoNegocios = [
    { nombre: "Restaurante" },
    { nombre: "Cafetería" },
    { nombre: "Panadería" },
    { nombre: "Pastelería" },
    { nombre: "Heladería" },
    { nombre: "Bar" },
    { nombre: "Catering" },
    { nombre: "Food Truck" },
    { nombre: "Otros" }
]

const BannerFormNeg = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [form, setForm] = useState<IForm>({
        nombre: "",
        telefono: "",
        tipoNegocio: "",
        direccion: ""
    });
    const [errors, setErrors] = useState<IForm>({
        nombre: "",
        telefono: "",
        tipoNegocio: "",
        direccion: ""
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    const validateForm = () => {
        let errors: IForm = {
            nombre: "",
            telefono: "",
            tipoNegocio: "",
            direccion: ""
        };

        if (!form.nombre) errors.nombre = "El nombre es requerido";
        if (!form.telefono) errors.telefono = "El teléfono es requerido";
        if (!form.tipoNegocio) errors.tipoNegocio = "El tipo de negocio es requerido";
        if (!form.direccion) errors.direccion = "La dirección es requerida";
        setErrors(errors);
        return Object.values(errors).every((err) => err === "");
    }

    const onSubmitNeg = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        if (validateForm()) {
            setLoading(false);
            return;
        }

        setTimeout(() => {
            setLoading(false);
            setSuccess(false);
        }, 200);

    }

    return (
            <div class="flex flex-col relative max-w-[333px]">
                <Typography Tag="h2" variant="heading" weight="medium">
                    REGISTRA TU NEGOCIO
                </Typography>
                <form onSubmit={onSubmitNeg}
                    class="my-4 gap-4 flex flex-col">
                    <label for="nombre" class="flex flex-col gap-1 w-full">
                        <Typography variant="label" weight="small"> Nombre y Apellidos </Typography>
                        <input
                            type="text"
                            id="nombre"
                            value={form.nombre}
                            name="nombre"
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                            ${errors.nombre ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                            `}
                            placeholder="Ingresa tu nombre completo"
                            onChange={handleChange}
                        />
                        {
                            errors.nombre && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.nombre}
                            </Typography>
                        }
                    </label>
                    {/* Teléfono : Ingresa  tu número de celular*/}
                    <label for="telefono" class="flex flex-col gap-1 w-full">
                        <Typography variant="label" weight="small"> Teléfono </Typography>
                        <input
                            type="text"
                            id="telefono"
                            value={form.telefono}
                            name="telefono"
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                            ${errors.telefono ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                            `}
                            placeholder="Ingresa tu número de celular"
                            onChange={handleChange}
                        />
                        {
                            errors.telefono && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.telefono}
                            </Typography>
                        }
                    </label>
                    {/* Tipo de negocio :  Elige el tipo*/}
                    <label for="role" class="flex flex-col gap-1 ">
                        <Typography variant="label" weight="small"> Tipo de negocio </Typography>
                        <select
                            id="tipoNegocio"
                            name="tipoNegocio"
                            value={form.tipoNegocio}
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.tipoNegocio ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                            onChange={handleChange}
                        >
                            <option value="">Elige el tipo</option>
                            {/* {typeRoleOption.map((option) => (
                            <option value={option}>{option}</option>
                        ))} */}
                            {/* {typeUser.map((option) => (
                                <option value={option.nombre}>{option.nombre}</option>
                            ))} */}
                            {
                                tipoNegocios.map((option) => (
                                    <option value={option.nombre}>{option.nombre}</option>
                                ))
                            }
                        </select>
                        {
                            errors.tipoNegocio && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.tipoNegocio}
                            </Typography>
                        }
                    </label>
                    {/* Ciudad y distrito : Ingresa tu ciudad y distrito */}
                    <label for="direccion" class="flex flex-col gap-1 w-full">
                        <Typography variant="label" weight="small"> Dirección </Typography>
                        <input
                            type="text"
                            id="direccion"
                            value={form.direccion}
                            name="direccion"
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                            ${errors.direccion ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                            `}
                            placeholder="Ingresa tu dirección"
                            onChange={handleChange}
                        />
                        {
                            errors.direccion && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.direccion}
                            </Typography>
                        }
                    </label>
                    <button
                        class="bg-primary text-white h-14 w-full lg:w-80 disabled:bg-[#BDBDBD] disabled:cursor-not-allowed disabled:opacity-50 rounded"
                        type="submit"
                        // onClick={onSubmitNeg}
                        disabled={loading}
                    >

                        <Typography variant="label" weight="large" color="white" align="center">
                            {loading ?
                                <div class="flex justify-center items-center gap-2">
                                    <div class="w-4 h-4 border-2 border-t-[#fff] border-l-[#fff] rounded-full animate-spin"></div>
                                </div>
                                : "Enviar"}
                        </Typography>
                    </button>
                </form>
                {/* {
                            success &&
                            <div class={`flex flex-row gap-2 items-center`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_27731_5361" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_27731_5361)">
                                        <path d="M10.5808 16.2538L17.3038 9.53075L16.25 8.47693L10.5808 14.1462L7.73075 11.2962L6.67693 12.35L10.5808 16.2538ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5Z" fill="#3AA76D" />
                                    </g>
                                </svg>

                                <Typography variant="label" weight="large">
                                    ¡Enviado exitosamente!
                                </Typography>
                            </div>
                        } */}
            </div>
    )
}

export default BannerFormNeg;