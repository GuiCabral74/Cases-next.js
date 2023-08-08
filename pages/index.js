import Link from '../src/components/Link';
export default function HomePage() {
    return (
        <div>
            <h1>Alura cases - Home Page</h1>
            <Link href="/faq" legacyBehavior>
                Página FAQ.
            </Link>
        </div>
    );
}