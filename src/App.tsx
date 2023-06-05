import { useState } from 'react'
import Navbar from './scenes/Navbar'
import {
    SelectedPage
} from "./shared/types";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );

    return (
        <div className="App bg-gray-20">
            <Navbar selectedPage={selectedPage} setSelectedPage={selectedPage}/>
        </div>
  )
}

export default App
