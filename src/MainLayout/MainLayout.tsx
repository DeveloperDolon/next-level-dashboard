
import PropTypes from "prop-types";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const MainLayout:React.FC<Props> = ({children}) => {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-[#555555] to-[#555555]">
            {children}
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node
}