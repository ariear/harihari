import Navbar from "@/components/Navbar";
import NewTaskBtn from "@/components/new_tasks/NewTaskBtn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-12">
        <p className="font-semibold text-2xl text-center">Organize your daily work</p>
      </div>
      <NewTaskBtn />
    </main>
  )
}