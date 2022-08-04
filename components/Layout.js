import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export function Layout() {

    return (
        <div className='undefined flex flex-col flex-wrap gap-x-0 gap-y-0 w-full justify-center items-center'>
            <div className='container max-w-lg px-4 py-32 mx-auto my-auto md:max-w-none text-center trackin'>
                <Navbar />
                
                <Footer />
            </div>
        </div>
    )
}
