import type React from "react"
import { Header } from "../../components";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div>     
            <Header />
            
            <div>
                { children }
            </div>
        </div>
    );
}