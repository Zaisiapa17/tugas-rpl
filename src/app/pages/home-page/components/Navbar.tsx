import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {

    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        Purba<span className='text-green-600'>Putra</span>
                    </Link>

                    <div className='h-full flex items-center space-x-4'>
                        <Avatar>
                            <AvatarImage src="https://github.com/Zaisiapa17.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar