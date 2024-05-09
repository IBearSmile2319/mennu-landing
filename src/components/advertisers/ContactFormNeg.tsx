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

const ContactFormNeg = () => {
    // const [recaptchaResponse, setRecaptchaResponse] = useState<null | {
    //     score: number;
    // }>(null);
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
        if (form.consulta.length < 1) {
            errors.consulta = "Ingresa una consulta válida";
        }

        setErrors(errors);
        return Object.values(errors).some((error) => error.length > 0);
    }

    const onSubmitNeg = (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log("hola")
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        if (validateForm()) return;
    }

    return (
        <>

            <div class="flex flex-col">
                <Typography variant="heading" weight="medium"> Contáctanos </Typography>
                <form onSubmit={onSubmitNeg} class="my-4 gap-4 flex flex-col">
                    <div class="flex flex-row gap-4">
                        <label for="nombre" class="flex flex-col gap-1 w-full">
                            <Typography variant="label" weight="small"> Nombre </Typography>
                            <input
                                type="text"
                                id="nombre"
                                value={form.nombre}
                                name="nombre"
                                class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                            ${errors.nombre ? "bg-[#FFEFED] border-[#F1998E]" : ""}
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
                                class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                            ${errors.nombre ? "bg-[#FFEFED] border-[#F1998E]" : ""}
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
                            class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.correo ? "bg-[#FFEFED] border-[#F1998E]" : ""}
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
                    <label for="consulta" class="flex flex-col gap-1">
                        <Typography variant="label" weight="small">
                            Indícanos cuál es tu consulta
                        </Typography>
                        <textarea
                            id="consulta"
                            name="consulta"
                            value={form.consulta}
                            // class="bg-[#EEEEEE] h-24 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm"
                            class={`bg-[#EEEEEE] h-24 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.consulta ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                            placeholder="Escribe el detalle de tu consulta"
                            onChange={handleChange}
                        ></textarea>
                        {
                            errors.consulta && <Typography variant="paragraph" weight="small" color="complementaryII">
                                {errors.consulta}
                            </Typography>
                        }
                    </label>
                    <button
                        class="bg-primary text-white h-14 w-80 disabled:bg-[#BDBDBD] disabled:cursor-not-allowed disabled:opacity-50"
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
            </div>
        </>
    )
}

export default ContactFormNeg
