import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}) {
    return (
        <>
            <main className="w-full max-w-7xl mx-auto px-4 mt-4">
                {children}
            </main>
            <footer className="flex items-center justify-center w-full my-8">
                <p>&copy;&nbsp;1996 - 2025 WebCarros - Todos os direitos reservados</p>
            </footer>
        </>
    )
}