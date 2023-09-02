import {Box, Button, Flex, Text} from '@chakra-ui/react';
import {useState} from 'react';
// import {ModalProduct} from './components/Modal';
import {ProductsList} from './components/ProductsList';

interface Product {
	name: string;
	price: number;
	quantity: number;
}

function App() {
	// const {isOpen, onOpen, onClose} = useDisclosure();
	const [items, setItems] = useState<Product[]>([
		{
			name: '',
			price: 0,
			quantity: 0
		}
	]);

	const handleSaveItems = () => {
		setItems([...items, {name: '', price: 0, quantity: 0}]);
	};

	const handleTotal = () => {
		const total = items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		const totalFormatted = total.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		});

		return totalFormatted;
	};
	return (
		<Flex
			w='100%'
			bg='blackAlpha.900'
			h={'100vh'}
			p={4}
			direction={'column'}
			gap={4}
		>
			<Flex gap={4} justifyContent={'space-between'}>
				<Text color={'whiteAlpha.900'}> Bem vindo</Text>

				<Button onClick={handleSaveItems}>+</Button>
			</Flex>

			{/* <ModalProduct
				isOpen={isOpen}
				onClose={onClose}
				setItems={setItems}
				items={items}
			/> */}

			<ProductsList items={items} setItems={setItems} />

			<Box w='100%' h='fit-content' p={0} mt={40}>
				<Text color={'gray.500'}>Total</Text>

				<Text color={'whiteAlpha.900'} fontSize={'2xl'}>
					{handleTotal()}
				</Text>
			</Box>
		</Flex>
	);
}

export default App;
