const ITMES = [
	{ title: "HTML" },
	{ title: "CSS" },
	{ title: "Javascript" },
	{ title: "React(Next.js)" },
	{ title: "Tailwind CSS" },
	{ title: "supabase" },
];

export function Skill() {
	return (
		<div className="flex justify-center items-center pt-12">
			<div>
				<h2 className="text-5xl font-serif font-bold">Skill</h2>
				<div className="pt-4">
					<div className="grid grid-cols-2 grid-rows-3 gap-4">
						{ITMES.map((item) => {
							return (
								<div
									key="item.list"
									className="flex items-center justify-center border border-black py-12 px-5 text-xl font-serif font-bold
                                    hover:text-white hover:bg-blue-600 focus"
								>
									{item.title}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
