import { Home } from "lucide-react";
import HomeNavbar from "./HomeNavbar";


function Books() {
    return (
        <div className="books-container">
            <HomeNavbar />
            <h2>Books</h2>
            <p>Here you can find a collection of books.</p>
            {/* Add more content or components related to books here */}
        </div>
    )
}

export default Books;