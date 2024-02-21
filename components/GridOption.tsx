import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    tittle: string;
    className?: string;
    image?: string;
}

const GridOption = ({ tittle, className, image }: Props) => {
    return <Link
        href={{
                pathname: '/search',
                query: { q: tittle }
            }}
        className={cn(" grid-option relative", className)}
    >
        <h2>{tittle}</h2>
        {
            image && (

                <Image
                    src={image}
                    alt={tittle}
                    layout='fill'
                    className='object-cover opacity-20 rounded-md'
                />
            )
        }
    </Link>
}

export default GridOption