import type React from "react"

export const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <>                    
            { children }
        </>
    );
}