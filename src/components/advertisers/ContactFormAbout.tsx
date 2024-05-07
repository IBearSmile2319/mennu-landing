import { useState } from "preact/hooks";
import Typography from "../ui/typography/Typography"

const ContactFormAbout = () => {
    const [loading, setLoading] = useState(false);

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
        <div class="flex flex-col w-[347px]">
            <Typography variant="heading" weight="medium"> Contáctanos </Typography>
            <form onSubmit={onSubmitNeg} class="my-4 gap-4 flex flex-col">
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
    )
}

export default ContactFormAbout
