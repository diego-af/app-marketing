import {Box, Center, Flex, Input, Text, useToast} from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons';

interface Product {
	name: string;
	price: number;
	quantity: number;
}

interface ProductsListProps {
	items: Product[];
	setItems: (items: Product[]) => void;
}
export const ProductsList = ({items, setItems}: ProductsListProps) => {
	const toast = useToast();
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const {name, value} = e.target;

		console.log(value);

		const novoArray = items.map((item, i) => {
			if (i === index) {
				return {...item, [name]: value};
			}
			return item;
		});
		setItems(novoArray);
	};

	const removeItem = (index: number) => {
		const novoArray = items.filter((_, i) => i !== index);
		toast({
			title: 'Item removido',
			status: 'info',
			duration: 3000,
			isClosable: true
		});
		setItems(novoArray);
	};

	return (
		<>
			{items.map((item, key) => (
				<Box w='100%' h='fit-content' p={0} key={key}>
					<Flex gap={1} align={'center'}>
						<Box gap={1} p={0} position={'relative'}>
							<Text color={'whiteAlpha.800'} mb={2}>
								Nome
							</Text>
							<Input
								type='text'
								placeholder='Produto'
								_placeholder={{color: 'whiteAlpha.500'}}
								color={'whiteAlpha.800'}
								w={'150px'}
								value={item.name}
								name={'name'}
								onChange={(e) => handleInputChange(e, key)}
							/>
						</Box>
						<Box>
							<Text color={'whiteAlpha.800'} mb={2}>
								Preço
							</Text>
							<Input
								type='number'
								placeholder='Preço'
								_placeholder={{color: 'whiteAlpha.500'}}
								w={'110px'}
								color={'whiteAlpha.800'}
								value={item.price}
								name={'price'}
								onChange={(e) => handleInputChange(e, key)}
							/>
						</Box>
						<Box>
							<Text color={'whiteAlpha.800'} mb={2}>
								Qtd
							</Text>
							<Input
								min={1}
								type='number'
								color={'whiteAlpha.800'}
								max={20}
								name={'quantity'}
								w={'80px'}
								value={item.quantity}
								placeholder='Qtd'
								onChange={(e) => handleInputChange(e, key)}
							/>
						</Box>
						<Center onClick={() => removeItem(key)} mt={8} ml={1}>
							<DeleteIcon w={8} h={8} color='red.500' />
						</Center>
					</Flex>{' '}
				</Box>
			))}
		</>
	);
};
