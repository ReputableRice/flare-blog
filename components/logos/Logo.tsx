import Image from "next/image"
import logo from "../../public/images/Flare.svg"

export default function Logo() {
    return (
        <>
            <Image
                height={60}
                width={60}
                src={logo}
                alt="Flare logo"
            />
        </>
    )
}