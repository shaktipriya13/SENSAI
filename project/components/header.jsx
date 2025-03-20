import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>

            </nav>
            <SignedOut>
                <SignInButton />
                {/* <SignUpButton /> */}
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
}

export default Header;
