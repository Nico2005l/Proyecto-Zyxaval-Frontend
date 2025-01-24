import Footer from "./Footer";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Skills from "./Skills";

function AboutMe() {
    return (
    <div className="mx-auto px-4 bg-gradient-to-b from-black to-gray-600 min-h-screen pt-8">
        <Header title="Sobre Mi" description="Conoce más sobre mi experiencia y habilidades"/>
        <main className="flex flex-col space-y-12 py-8">
            <ProfileCard />
            <Skills />
        </main>
        <Footer /> 
    </div>);
}

export default AboutMe;