export default function Project({image, title, text, websiteLink, githubLink}) {
    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">{title}</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <svg className="github" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47"/>
                    </svg>
                </a>
            </div>
            <p>{text}</p>
        </div>
    )
}