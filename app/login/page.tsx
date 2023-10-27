import { SignIn } from "./client";

export default function Login() {
    return (
        <main className="font-poppins h-screen flex flex-col justify-between items-center text-center">
            <div></div>
            <div>
                <p className="text-3xl font-bold mb-3">日々</p>
                <p className="text-xl font-semibold mb-8">Organize your daily work</p>
                <SignIn />
            </div>
            <div className="mb-5">
                <p className="text-lg font-medium mb-1">Copyright © 2023</p>
                <a href='https://github.com/ariear' target='_blank' className="block text-lg italic underline">ArieAr</a>
            </div>
        </main>
    )
}