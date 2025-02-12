import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useTodoHook from "../context/todoHook";

const Header = () => {
     const { user } = useTodoHook()
     return (
          <header className="w-full px-5 py-10 flex flex-col gap-5">

               <div className="flex justify-between items-center">
                    <HamburgerMenuIcon className="size-6 text-white" />
                    <div className="flex items-center gap-2.5">
                         <h3 className="text-white ">{user?.name}</h3>
                         <div className="rounded-full border-slate-500 overflow-hidden w-10 h-10">
                              <img src={user?.profile} alt="React" className="w-full object-cover h-full" />
                         </div>
                    </div>
               </div>

               <div className="flex gap-2.5 items-center text-white">
                    {new Date().getHours() < 12 ? <>
                         <h3>Good Morning, Welcome!</h3> <SunIcon className="size-6" />
                    </> : new Date().getHours() < 16 ? <>
                         <h3>Good afternoon, Welcome!</h3> <MoonIcon className="size-6" />
                    </> : <>
                         <h3>Good Evening, Welcome!</h3> <MoonIcon className="size-6" />
                    </>}
               </div>




          </header>
     )
}

export default Header