import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export function Header() {
	return (
		<div className="flex sticky top-0 w-full bg-gray-600 py-2">
			<div className="flex justify-start items-center">
				<div className="flex justify-center items-center mb-2 mr-10 ml-2">
					<h1 className="font-serif font-bold text-xl text-white">N's Blog</h1>
				</div>

				{/* md以上のnavigation  */}
				<div className="hidden md:flex">
					<div className="flex flex-row space-x-10 font-serif font-bold text-1xl mb-2 text-white">
						<Link href="/">
							<a className=" hover:text-blue-600 md:hover:text-blue-600">
								Home
							</a>
						</Link>
						<Link href="/blog">
							<a className="hover:text-blue-600 md:hover:text-blue-600">Blog</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
