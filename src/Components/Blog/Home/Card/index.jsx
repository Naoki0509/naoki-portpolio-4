import { Box } from "@chakra-ui/react";

export function Card() {
	return (
		<div className="flex items-center justify-center w-full">
			<div>
				<Box bg="gray.100" p={4} width="100%">
					<h2>Card</h2>
				</Box>
			</div>
		</div>
	);
}
