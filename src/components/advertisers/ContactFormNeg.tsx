import { useState } from "preact/hooks"
import Typography from "../ui/typography/Typography";
import { isValidateEmail } from "@/utils";
interface IForm {
    nombre: string;
    apellido: string;
    celular: string;
    correo: string;
    consulta: string
}

interface Props {
    title?: string;
    consulta?: boolean;
}

const ContactFormNeg = ({ title = 'Contáctanos', consulta = true }: Props) => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<IForm>({
        nombre: "",
        apellido: "",
        celular: "",
        correo: "",
        consulta: ""
    });

    const [errors, setErrors] = useState<IForm>({
        nombre: "",
        apellido: "",
        celular: "",
        correo: "",
        consulta: ""
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validateForm = () => {
        let errors: IForm = {
            nombre: "",
            apellido: "",
            celular: "",
            correo: "",
            consulta: ""
        };

        if (form.nombre.length < 2) {
            errors.nombre = "Ingresa un nombre válido";
        }
        if (form.apellido.length < 2) {
            errors.apellido = "Ingresa un apellido válido";
        }
        if (form.celular.length !== 9) {
            errors.celular = "Ingresa un número de celular válido";
        }
        if (form.correo && !isValidateEmail(form.correo)) {
            errors.correo = "Ingresa un correo válido";
        }
        if (form.consulta.length < 1 && consulta) {
            errors.consulta = "Ingresa una consulta válida";
        }

        setErrors(errors);
        return Object.values(errors).some((error) => error.length > 0);
    }

    const onSubmitNeg = async (e: any) => {
        e.preventDefault();
        let body = {
            tipo: consulta ? "ADs" : "PLAN",
            nombres: form.nombre,
            apellidos: form.apellido,
            numero: form.celular,
            email: form.correo,
            consulta: consulta ? form.consulta : "Planes de pago"
        };
        setSuccess(false);
        setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 2000);
        if (validateForm()) {
            setLoading(false);
            return;
        }
        // https://dev.api.mennu.net/v1/core/api/contact/save | POST

        await fetch('https://dev.api.mennu.net/v1/core/api/contact/save', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setSuccess(true);
                setLoading(false);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
                setSuccess(false);
            });
    }


    return (
        <>

            <div class="flex flex-col">
                <Typography variant="heading" weight="medium"> {title} </Typography>
                <form onSubmit={onSubmitNeg} class="my-4 gap-4 flex flex-col">
                    <div class="flex flex-col lg:flex-row gap-4">
                        <label for="nombre" class="flex flex-col gap-1 w-full">
                            <Typography variant="label" weight="small"> Nombre </Typography>
                            <input
                                type="text"
                                id="nombre"
                                value={form.nombre}
                                name="nombre"
                                class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm ${errors.nombre ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                            `}
                                placeholder="Ingresa tu nombre"
                                onChange={handleChange}
                            />
                            {
                                errors.nombre && <Typography variant="paragraph" weight="small" color="complementaryII">
                                    {errors.nombre}
                                </Typography>
                            }
                        </label>
                        <label for="apellido" class="flex flex-col gap-1 w-full">
                            <Typography variant="label" weight="small"> Apellido </Typography>
                            <input
                                type="text"
                                id="apellido"
                                value={form.apellido}
                                name="apellido"
                                class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm ${errors.nombre ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                            `}
                                placeholder="Ingresa tus apellidos"
                                onChange={handleChange}
                            />
                            {
                                errors.apellido && <Typography variant="paragraph" weight="small" color="complementaryII">
                                    {errors.apellido}
                                </Typography>
                            }
                        </label>
                    </div>
                    <label for="celular" class="flex flex-col gap-1">
                        <Typography variant="label" weight="small"> Celular </Typography>
                        <input
                            type="text"
                            id="celular"
                            name="celular"
                            value={form.celular}
                            // class="bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm"
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm 
                        ${errors.celular ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                            maxLength={9}
                            placeholder="Ingresa tu número de celular"
                            onChange={handleChange}
                        />
                        {
                            errors.celular && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.celular}
                            </Typography>
                        }
                    </label>
                    <label for="correo" class="flex flex-col gap-1">
                        <Typography variant="label" weight="small">
                            Correo electrónico
                        </Typography>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={form.correo}
                            // class="bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm"
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm ${errors.correo ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                            placeholder="Correo electrónico (opcional)"
                            onChange={handleChange}
                        />
                        {
                            errors.correo && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.correo}
                            </Typography>
                        }
                    </label>
                    {
                        consulta && <>
                            <label for="consulta" class="flex flex-col gap-1">
                                <Typography variant="label" weight="small">
                                    Indícanos cuál es tu consulta
                                </Typography>
                                <textarea
                                    id="consulta"
                                    name="consulta"
                                    value={form.consulta}
                                    // class="bg-[#EEEEEE] h-24 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm"
                                    class={`bg-[#EEEEEE] h-24 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm ${errors.consulta ? "bg-[#FFEFED] border-[#F1998E]" : ""}`}
                                    placeholder="Escribe el detalle de tu consulta"
                                    onChange={handleChange}
                                ></textarea>
                                {
                                    errors.consulta && <Typography variant="paragraph" weight="small" color="complementaryII">
                                        {errors.consulta}
                                    </Typography>
                                }
                            </label>
                        </>
                    }
                    <button
                        class="bg-primary text-white h-14 w-full lg:w-80 disabled:bg-[#BDBDBD] disabled:cursor-not-allowed disabled:opacity-50"
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
                <div class={`flex flex-row gap-2 items-center justify-center ${success ? "opacity-100" : "opacity-0"}`}>
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

            </div>
        </>
    )
}

export default ContactFormNeg
