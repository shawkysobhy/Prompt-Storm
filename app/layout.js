import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
	title: 'proptopia',
	description: 'Discover & share ai prompts',
};
const RootLayout = ({ children }) => {
	return (
		<html>
			<body>
				<Provider>
				<div className='main'>
					<div className='gradient' />
				</div>
				<div className='app'>
          <Nav/>
          {children}
          </div>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
