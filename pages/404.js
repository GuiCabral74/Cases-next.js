import Link from '../src/components/Link';

export default function NotFound () {
    return (
        <div>
            <h1>Pagina não encontrada</h1>
            <Link href='/'>
                Voltar para Home.
            </Link>
        </div>
    )
}