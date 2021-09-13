import { Box } from "@chakra-ui/react";

export function Card() {
	return (
		<div className="flex items-center justify-center w-full">
			<div>
				<div>
					<Box h="100%" w="100%" bg="gray.200">
						<Box>
							<h1>Image</h1>
						</Box>
						<Box>
							<h1>Card</h1>
						</Box>
					</Box>
				</div>
			</div>
		</div>
	);
}
