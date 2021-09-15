import { Center, Square, Circle, Box } from "@chakra-ui/react";

export function Card() {
	return (
		<div className="flex items-center justify-center">
			<div>
				<div className="">
					<Center>
						<Box minW="sm" borderWidth="1px" rounded="lg" bg="tomato" p={4}>
							<Box></Box>
							<Box></Box>
							<Box></Box>
						</Box>
					</Center>
				</div>
			</div>
		</div>
	);
}
