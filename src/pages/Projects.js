export default function Projects() {
    function ProjectBox(props) {
        return (
            <div className="project_box">
                <h3>{props.name}</h3>
                <a href={props.link}>Link to Project</a>
            </div>
        )
    }

    return (
        <div>
            <h2 className="page_header">Projects</h2>
            <div className="project_container">
                <ProjectBox 
                    name={"Flower Classifier"} 
                    link={"https://github.com/JohnnyLeek1/Flower-Classifier"}
                />
                <ProjectBox 
                    name={"Pixel Art Generator"} 
                    link={"https://github.com/JohnnyLeek1/Pixel-Art-Character-Generator"}
                />
                <ProjectBox 
                    name={"Text-to-Game Engine"} 
                    link={"https://github.com/CJT157/TextToGameEngine"}
                />
                <ProjectBox 
                    name={"IEEE IMDB Scraper"} 
                    link={"https://github.com/CJT157/IEEEScraper"}
                />
                <ProjectBox 
                    name={"JavaFX Checkers App"} 
                    link={"https://github.com/CJT157/ChessGame"}
                />
            </div>
        </div>
    )
}