import Link from 'next/link';
import { Button } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'; // Correct import

// Import your Button component or use a regular button

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#0f0f23] to-[#0f0221] text-white shadow-lg">
            {/* Left side: User button */}
            <div>
                {/* Trade Button */}
                <Button className='bg-gradient-to-r from-[#3e5a88] to-[#6b0c6b] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300  mb-5 w-32'>
                    Trade
                </Button>
                <UserButton  >

                </UserButton>
            </div>

            {/* Center: Logo and Heading */}
            <div className="flex items-center gap-2">
                {/* Logo */}
                <Image
                    src="/images/unipay.jpg" // Path to your logo file
                    alt="Logo"
                    width={40} // Adjust the width
                    height={40} // Adjust the height
                />
                <span className="text-2xl font-bold">Orbital X</span>
            </div>

            {/* Right side: Settings button */}
            <div>
                <Button className="bg-gradient-to-r from-[#1e1e2d] to-[#5f0d5e] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300">
                    Settings
                </Button>
            </div>
        </header>
    );
};

export default Header;
