"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre') || 'fetchTrending';
    return (
        <div>
            <Link
                className={`inline-flex items-center rounded-lg px-3 py-2 font-semibold transition-all ${
                    genre === param
                        ? ' text-white underline underline-offset-8 decoration-2 decoration-white'
                        : ' hover:underline hover:underline-offset-4 hover:decoration-amber-600'
                }`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
}