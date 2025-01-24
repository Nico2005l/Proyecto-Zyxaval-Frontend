function ProfileCard() {
    return (
      <div className="w-full h-full flex justify-center items-center bg-transparent">
        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white p-8 flex items-center">
          <img
          src={'/media/fotochaval.jpg'}
          alt="Nicolas Lussoro"
          className="w-60 h-60 rounded-full mr-6"
          />
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900">Nicolas Lussoro</h2>
            <h3 className="text-2xl text-gray-600">Desarrollador Fullstack</h3>
            <p className="text-gray-700 mt-4">
              Soy un desarrollador apasionado por la tecnología, con experiencia en una variedad de lenguajes y frameworks. Me encanta resolver problemas complejos y crear soluciones eficientes que mejoren la experiencia del usuario.
            </p>
            <div className="mt-6">
              <a
              href="https://www.linkedin.com/in/nicolas-lussoro/"
              className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
              LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfileCard;