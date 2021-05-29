import Link from 'next/link'
function Menu(){
    return (
        <>
            <ul>
            <li>
                <Link href="/">
                <a>Anasayfa</a>
                </Link>
            </li>
            <li>
                <Link href="/hakkimizda">
                    <a>Hakkımızda</a>
                </Link>
            </li>
            </ul>
        </>
    )
}

export default Menu;