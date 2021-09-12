import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Stack, HStack, VStack } from "@chakra-ui/react";

export function Card() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Box
				w="100%"
				h="100%"
				bg="black"
				border="1px solid"
				borderColor="gray.200"
				rounded="lg"
				p="4"
				textColor="white"
			>
				<Stack direction={["colum", "row"]} spacing="24px">
					<Box>
						<h1>Image</h1>
					</Box>
					<Box>
						<h1>Card</h1>
					</Box>
				</Stack>
			</Box>
		</div>
	);
}
