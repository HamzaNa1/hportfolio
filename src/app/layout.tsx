import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "HPortfolio",
	description: "HPortfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className + " no-scrollbar"}>
				<main className="flex min-h-screen max-h-full w-screen">
					<div className="min-h-full w-[30%] flex-col bg-slate-900 max-sm:hidden md:block"></div>
					<div className="flex min-h-full w-full flex-col bg-slate-800 drop-shadow-2xl shadow-xl">
						<div className="flex min-h-[8rem] w-full flex-row items-center justify-center text-center">
							<h1 className="text-5xl font-bold text-slate-300 drop-shadow-lg">
								Hamza Nasab
							</h1>
						</div>
						<div className="container">{children}</div>
					</div>
					<div className="min-h-full w-[30%] flex-col bg-slate-900 max-sm:hidden md:block"></div>
				</main>
			</body>
		</html>
	);
}
