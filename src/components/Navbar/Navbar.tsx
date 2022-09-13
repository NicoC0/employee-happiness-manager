import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import StarIcon from '@mui/icons-material/Star';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';


export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

	const handleOnClick = () => {
		dialogOpenSubject$.setSubject = true;
	}

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Employee Happiness Manager
					</Typography>
					<Button
						variant="contained"
						onClick={handleOnClick}
					>
						<StarIcon /> Favorites
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;

