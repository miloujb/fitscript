import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "../../assets/fitscript-images/Logo.png";
import Link
    from "./Link";
import {
    SelectedPage
} from "../../shared/types";

type Props = {
    page: string
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt="logo" src={Logo} />
                    </div>
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become A Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar