import {
    useEffect,
    useState
} from 'react'
import Navbar from './scenes/Navbar'
import {
    SelectedPage
} from "./shared/types";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            } else {
                if (window.scrollY !== 0) {
                    setIsTopOfPage(false);
                }
                window.addEventListener("scroll", handleScroll)
                return () => window.removeEventListener("scroll", handleScroll)
                    , []}
        }
    })
    return (
        <div className="App bg-gray-20">
            <Navbar selectedPage={selectedPage} setSelectedPage={selectedPage} isTopOfPage={isTopOfPage}/>
        </div>
  )
}

export default App
