import "./style.css"

const SvgViewer = ({id, action}) =>{
    const handleAction = () =>{
        
    }
    return(
        <div className="svg-viewer" onClick={handleAction}>
            <svg className={id ==="iconLink" ? "filled":"svg-use-container"}>
                <use href={`/assets/sprites.svg#${id}`}></use>
            </svg>

        </div>
    )
};

export default SvgViewer;