import cube from "../svg/cube.svg";
import cubeBlured from "../svg/cubeBlured.svg";
import logo from "../svg/Logo.svg";
import phone from "../svg/phone.svg";
import phoneBlured from "../svg/phoneBlured.svg";
import searchLogo from "../svg/searchLogo.svg";
import themeBtnIcon from "../svg/themeBtnIcon.svg";

const SvgSelector = ({name}) => {
    let iconPath;

    switch(name){
        case "cube":
            iconPath = cube;
            break;
        case "cubeBlured":
            iconPath = cubeBlured;
            break;
        case "logo":
            iconPath = logo
            break;
        case "phone":
            iconPath = phone
            break;
        case "phoneBlured":
            iconPath = phoneBlured
            break;
        case "searchLogo":
            iconPath = searchLogo
            break;
        case "themeBtnIcon":
            iconPath = themeBtnIcon
            break;
        default:
            iconPath = (<></>);
            break;
    };
    return (
        <img src = {iconPath} alt="image/icon" />
    );
};

export default SvgSelector;