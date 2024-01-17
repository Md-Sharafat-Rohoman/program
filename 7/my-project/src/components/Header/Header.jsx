import profile from '../../assets/profile.jpg'


const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-6xl bg-red-300 '>knowlege cage</h1>
            <img className='h-20 w-20 rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;