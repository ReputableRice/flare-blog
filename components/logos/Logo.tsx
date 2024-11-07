import Image from "next/image"
import logo from "../../public/images/FlareLogo.svg"

export default function Logo() {
    return (
        <>
            <Image
                height={200}
                width={200}
                src={logo}
                alt="Flare logo"
                />
        </>
    )
}