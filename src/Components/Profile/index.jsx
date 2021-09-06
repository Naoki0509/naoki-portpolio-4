export function Profile() {
	return (
		<div className="flex justify-center items-center pt-2">
			<div>
				<h1 className="text-5xl font-bold font-serif ">Profle</h1>
				<div className="flex flex-row space-x-6 pt-4">
					<div className="flex justify-center items-center h-28 w-28 rounded-full bg-blue-200 ">
						Image
					</div>
					<div className="text-left font-bold font-serif">
						<p>Hi!!</p>
						<p>Myname is Naoki!</p>
						<p>19 years old.</p>
						<p>From Yokohama,Japan</p>
					</div>
				</div>
			</div>
		</div>
	);
}
