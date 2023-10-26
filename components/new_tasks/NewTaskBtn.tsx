export default function NewTaskBtn({openModal}: any) {
    return (
        <button onClick={openModal} className="fixed w-max bottom-6 left-0 right-0 mx-auto text-white bg-black py-3 px-8 font-medium rounded-xl tracking-wide">New task</button>
    )
}