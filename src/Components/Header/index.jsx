import Link from "next/link";

export function Header() {
	return (
		<header className="flex justify-start items-center w-full border-b-2 border-black">
			<div className="flex justify-center items-center mb-2 mr-10 ml-2">
				<h1 className="font-serif font-bold">N's Blog</h1>
			</div>

			<nav className="">
				<div className="flex flex-row space-x-10 font-serif font-bold text-1xl mb-2">
					<Link href="/">
						<a className=" hover:text-blue-600 md:hover:text-blue-600">Home</a>
					</Link>
					<Link href="/blog">
						<a className="hover:text-blue-600 md:hover:text-blue-600">Blog</a>
					</Link>
				</div>
			</nav>
		</header>
	);
}
