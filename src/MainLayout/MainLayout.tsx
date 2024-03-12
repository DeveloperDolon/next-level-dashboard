
import Sidebar from "@/app/component/Sidebar";
import PropTypes from "prop-types";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {

    return (
        <div
            style={{
                background: "#636363",
                minHeight: "100vh",
                overflow: "auto",
                padding: "20px",
                boxSizing: "border-box"
            }}
            className="">
                <div className="">
                    <Sidebar>{children}</Sidebar>
                </div>
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node
}