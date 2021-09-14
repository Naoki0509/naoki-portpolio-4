import Head from "next/head";
import { Card } from "src/Components/Blog/Home/Card";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen pb-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-10">
				<Card />
			</main>
			<Footer />
		</div>
	);
}
