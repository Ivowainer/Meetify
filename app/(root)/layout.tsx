import StreamVideProvider from "@/providers/StreamClientProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <StreamVideProvider>
                {children}
            </StreamVideProvider>
        </main>
    );
};

export default RootLayout;
