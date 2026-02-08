export default function Custom404() {
    return (
        <div className='
          flex size-full flex-col items-center justify-center gap-3
          sm:flex-row sm:gap-0
        '>
            <h1 className='
              text-xl
              sm:text-3xl
            '>404</h1>
            <div className='
              mx-4 h-[0.15rem] w-24 bg-almostbright
              sm:h-12 sm:w-[0.15rem]
            ' />
            <h1 className='
              text-xl
              sm:text-3xl
            '>This page could not be found.</h1>
        </div>
    )
}
