import { useState } from "preact/hooks";
import Typography from "../ui/typography/Typography";

const typeRoleOption = [
    "Comensal",
    "Negocio de comida",
    "Anunciante",
    "Otro"
];

const listMotiveOptions = [
    "Dar una sugerencia",
    "Quiero trabajar con ustedes",
    "Reportar un problema",
    "Otro"
]

interface IForm {
    role: string;
    nombre: string;
    apellido: string;
    celular: string;
    motivo: string;
    mensaje: string;
}
interface Props {
    title?: string;

}
const ContactFormAbout = ({ title='Contáctanos' }: Props) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<IForm>({
        role: "",
        nombre: "",
        apellido: "",
        celular: "",
        motivo: "",
        mensaje: ""
    });
    const [errors, setErrors] = useState<IForm>({
        role: "",
        nombre: "",
        apellido: "",
        celular: "",
        motivo: "",
        mensaje: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }

    const validateForm = () => {
        return true
    }

    const onSubmitNeg = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        if (validateForm()) return;
    }
    return (
        <>
        <div class="flex flex-col relative">
            <Typography variant="heading" weight="medium"> {title} </Typography>
            <form onSubmit={onSubmitNeg} class="my-4 gap-4 flex flex-col">
                {/* Indícanos si eres : select*/}
                <label for="role" class="flex flex-col gap-1 ">
                    <Typography variant="label" weight="small"> Indícanos si eres: </Typography>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.role ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una opción</option>
                        {typeRoleOption.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                    {
                        errors.role && <Typography variant="paragraph" weight="small" color="complementaryII">
                            {errors.role}
                        </Typography>
                    }
                </label>
                {/* nombre y apelliso: inputs */}
                <div class="flex flex-col lg:flex-row gap-4">
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
                        <Typography variant="label" weight="small"> Apellidos </Typography>
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
                {/* celular: input */}
                <label for="celular" class="flex flex-col gap-1">
                    <Typography variant="label" weight="small"> Celular </Typography>
                    <input
                        type="text"
                        id="celular"
                        name="celular"
                        value={form.celular}
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
                {/* motivo: select */}
                <label for="motivo" class="flex flex-col gap-1">
                    <Typography variant="label" weight="small"> Motivo </Typography>
                    <select
                        id="motivo"
                        name="motivo"
                        value={form.motivo}
                        class={`bg-[#EEEEEE] h-9 p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.motivo ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una opción</option>
                        {listMotiveOptions.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                    {
                        errors.motivo && <Typography variant="paragraph" weight="small" color="complementaryII">
                            {errors.motivo}
                        </Typography>
                    }
                </label>
                {/* mensaje: textarea */}
                <label for="mensaje" class="flex flex-col gap-1">
                    <Typography variant="label" weight="small"> Escribe tu mensaje o sugerencia aquí</Typography>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={form.mensaje}
                        class={`bg-[#EEEEEE] p-2 appearance-none leading-tight focus:outline-none focus:shadow-none font-hind font-normal text-sm
                        ${errors.mensaje ? "bg-[#FFEFED] border-[#F1998E]" : ""}
                        `}
                        placeholder="Escribe el detalle de tu mensaje, consulta o sugerencia."
                        onChange={handleChange}
                    />
                    {
                        errors.mensaje && <Typography variant="paragraph" weight="small" color="complementaryII">
                            {errors.mensaje}
                        </Typography>
                    }
                </label>

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
        </div>
         
      </>
    )
}

export default ContactFormAbout
