import LinkPages from './link-pages';
import RegBtns from './reg-btns';

const Navigation = () => {
    return (
        <>
            <nav className='nav'>
                <LinkPages />
                <RegBtns />
            </nav>
        </>
    )
}

export default Navigation;