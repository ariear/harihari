import GoogleIcon from "@/public/icons/GoogleIcon";

export default function Login() {
    return (
        <main className="font-poppins h-screen flex flex-col justify-between items-center text-center">
            <div></div>
            <div>
                <p className="text-4xl font-bold mb-3">日々</p>
                <p className="text-2xl font-semibold mb-8">Organize your daily work</p>
                <button className="m-auto flex justify-center items-center bg-white py-4 px-10 rounded-xl shadow-md"><GoogleIcon /> <span className="ml-5 text-gray-600 font-medium text-lg">Continue with Google</span></button>
            </div>
            <div className="mb-8">
                <p className="text-lg font-medium mb-1">Copyright © 2023</p>
                <p className="text-lg italic underline">ArieAr</p>
            </div>
        </main>
    )
}