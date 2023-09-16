import { Container, Typography, Box } from '@mui/material';
import { AddTask } from '../components/todo_add_task';
import { ListContainer } from '../components/todo_list_container';

function TodoPage() {
	return (
		<Container
			sx={{
				backgroundColor: 'gray',
				minWidth: '100%',
				minHeight: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					borderRadius: '15px',
					maxWidth: '514px',
					minHeight: '766px',
					width: '100%',
					backgroundColor: 'white',
					padding: '32px',
				}}
			>
				<Typography
					sx={{ color: '#2196F3', fontSize: '34px', textAlign: 'center' }}
					component='h2'
				>
					TODO
				</Typography>
				<AddTask />
				<ListContainer />
			</Box>
		</Container>
	);
}

export { TodoPage };
