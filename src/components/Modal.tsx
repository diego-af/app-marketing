import {
	Box,
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	Text
} from '@chakra-ui/react';
import {useState} from 'react';

interface Product {
	name: string;
	price: number;
	quantity: number;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	items: Product[];
	setItems: (items: Product[]) => void;
}

export const ModalProduct = ({
	isOpen,
	onClose,
	setItems,
	items
}: ModalProps) => {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [productQuantity, setProductQuantity] = useState(0);

	const handleSaveItems = () => {
		setItems([
			...items,
			{name: productName, price: productPrice, quantity: productQuantity}
		]);

		onClose();
		setProductName('');
		setProductPrice(0);
		setProductQuantity(0);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalContent bg={'blackAlpha.900'}>
					<ModalHeader color={'whiteAlpha.900'}>
						Insira seu produtos
					</ModalHeader>

					<ModalCloseButton color={'whiteAlpha.900'} />
					<ModalBody>
						<Box w='100%' h='fit-content' p={0}>
							<Flex gap={1} direction={'column'}>
								<Box gap={1} p={0}>
									<Text color={'whiteAlpha.800'} mb={2}>
										Digite o nome
									</Text>
									<Input
										type='text'
										w={'100%'}
										color={'whiteAlpha.800'}
										value={productName}
										placeholder='Nome do produto'
										_placeholder={{color: 'whiteAlpha.500'}}
										onChange={(e) => setProductName(e.target.value)}
									/>
								</Box>
								<Box>
									<Text color={'whiteAlpha.800'} mb={2}>
										Digite o Preço
									</Text>
									<Input
										type='number'
										color={'whiteAlpha.800'}
										w={'100%'}
										value={productPrice}
										onChange={(e) =>
											setProductPrice(parseFloat(e.target.value))
										}
									/>
								</Box>
								<Box>
									<Text color={'whiteAlpha.800'} mb={2}>
										Digite a Quantidade
									</Text>
									<Input
										type='number'
										color={'whiteAlpha.800'}
										value={productQuantity}
										onChange={(e) =>
											setProductQuantity(parseFloat(e.target.value))
										}
									/>
								</Box>
							</Flex>{' '}
						</Box>
						<Flex w={'100%'} justifyContent={'flex-end'} mt={3}>
							<Button
								w={40}
								bg={'green.500'}
								color={'whiteAlpha.900'}
								_hover={{bg: 'green.600'}}
								onClick={handleSaveItems}
							>
								Salvar
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
