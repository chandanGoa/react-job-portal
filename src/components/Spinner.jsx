import { ClipLoader } from "react-spinners";

const spinnerCss = {
    display: 'block',
    margin: '100px auto'
}

export function Spinner() {
    return (
        <ClipLoader
            color="#4338ca"
            cssOverride={spinnerCss}
            size={150}
        />
    );
}