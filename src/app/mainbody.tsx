import Features from './components/features'
import Body from './components/body'
import NavBar from './navbar'
import Faq from './components/faq'
import Steps from './components/steps'
import Footer from './footer'
import Tech from './components/technologies'
import Setup from './components/step-by-step'

export default function BodyComponent() {
    return (
        <div className="body">
            < NavBar />
            < Body />
            < Features />
            < Tech />
            < Steps />
            {/* < Faq /> */}
            < Footer />
        </div>
    )
}