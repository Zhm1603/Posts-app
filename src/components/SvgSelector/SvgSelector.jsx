import cube from "../../assets/svg/cube.svg";
import cubeBlured from "../../assets/svg/cubeBlured.svg";
import logo from "../../assets/svg/Logo.svg";
import phone from "../../assets/svg/phone.svg";
import phoneBlured from "../../assets/svg/phoneBlured.svg";
import searchLogo from "../../assets/svg/searchLogo.svg";
import themeBtnIcon from "../../assets/svg/themeBtnIcon.svg";
import themeBtnIconDark from "../../assets/svg/themeBtnIconDark.svg"

const SvgSelector = ({name}) => {
    let iconPath;

    switch(name){
        case "cube ":
            iconPath = cube;
            break;
        case "cube Blured":
            iconPath = cubeBlured;
            break;
        case "logo":
            iconPath = logo
            break;
        case "phone ":
            iconPath = phone
            break;
        case "phone Blured":
            iconPath = phoneBlured
            break;
        case "searchLogo":
            iconPath = searchLogo
            break;
        case "themeBtnIcon":
            iconPath = themeBtnIcon
            break;
        case "themeBtnIconDark":
            iconPath = themeBtnIconDark
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