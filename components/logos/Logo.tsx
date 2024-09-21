import Image from "next/image"
import logo from "../../public/images/LighthouseLogo.png"

export default function Logo() {
    return (
        <>
            <Image
                height={25}
                width={25}
                src={logo}
                alt="lighthouse logo"
                />
        </>
    )
}