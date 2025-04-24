export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='p-[2rem]'>
            <h1>Copyright © {year} Dummy</h1>
        </div>
    )
}
