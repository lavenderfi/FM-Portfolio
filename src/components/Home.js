

export default function Home () {
    return (
        <div className='home'>
            <button type="button" className="btn btn-outline-warning">Download my resume</button>
        <p>Hello, welcome! I am an aspiring software engineer, currently studying with FullStack Academy through the Grace Hopper Program</p>
        <p>Thus far, I have developed profficiency mainly in Javascript, and learned how to build responsive, full-stack programs with React and Express. I have also gained familiarity with CSS and Bootstrap. In the future, I hope to explore and develop skills in Python and React Native as well.</p>
        <p>I hope to bring an emphasis on accessibility and diversity to every project I build and work on. Making apps and programs more accessible to everyone, starting from the very beginning of development is an important goal of mine. When projects are built with these things in mind, it benefits everyone and leads to a more comphrensive, and log-lasting application.</p>
        <div className='socials'>
           <a href='https://github.com/lavenderfi'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github logo'/></a> 
           <a href='https://www.linkedin.com/in/fiona-murray-58b206157'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linked-in logo'/></a> 
        </div>
        </div>
    )
}