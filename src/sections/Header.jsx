import NavigationBar from './NavigationBar';
import Hero from './Hero';

const Header = ({ backgroundColor }) => {
    return (
        <header className="relative">
            <NavigationBar backgroundColor={backgroundColor} shouldHaveMargin />
            <Hero />
        </header>
    );
};

export default Header;