import Head from "next/head";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { Profile } from "src/Components/Profile";
import { Skill } from "src/Components/Skill";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-5 pt-4 text-center">
				<Profile />
				<Skill />
			</main>
			<Footer />
		</div>
	);
}
