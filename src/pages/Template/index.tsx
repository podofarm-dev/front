import { DialogContainer } from "@/modules/MuiDialog"
import { Outlet } from "react-router-dom"

const TemplateDemo = () => {
    return (
        <div className="flex flex-col">
            <div>Template Index</div>
            <Outlet />
            <DialogContainer />
        </div>
    )
}
export default TemplateDemo