import {RxHamburgerMenu} from "react-icons/rx";
import {useNavigate} from "react-router-dom";
export function Header() {
    const navigator = useNavigate();
    const handleHome = () => {};
    return (
        <div className="flex bg-black items-center h-10 z-10 ">
            <div className="flex h-full items-center ">
                <div className="h-10 w-10 rounded-full hover:bg-slate-800 hover:ease-in hover:duration-300 flex items-center justify-center">
                    <RxHamburgerMenu
                        className="w-1/2 h-1/2 cursor-pointer hidden md:block text-slate-800 hover:text-black"
                        onClick={() => alert("hi")}
                    />
                </div>
                <img
                    src={"/Yotube.png"}
                    className="h-[120px] w-[120px] cursor-pointer"
                    onClick={() => navigator("/")}
                />
            </div>
        </div>
    );
}
