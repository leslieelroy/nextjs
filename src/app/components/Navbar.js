import Link from 'next/link'

export default function Navbar() {
    return (
        <div className=" flex w-full bg-gray-400">
            <div className="ml-2 self-center">
                <h1 className="text-4xl text-center">Leslie</h1>
            </div>
            <ul className="flex w-full justify-end self-center mr-2">
                <li className="mr-4">
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href={"/about"}>
                        About
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href={"/contact"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}