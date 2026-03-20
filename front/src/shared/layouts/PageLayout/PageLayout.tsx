import type React from "react";

interface IPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const PageLayout = ({ title, children }: IPageLayoutProps) => {
    return (
        <div>
            <div>
                { title }
            </div>
            
            <div>
                { children }
            </div>
        </div>
    )
}
