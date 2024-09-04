import styles from '@/styles/CreateMovie.module.css'


export default function movie({ MovieName }: any) {
    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>
            <div className={styles.page}>
                <div className={styles.movie}>
                    <img src="/baudamorte.jpg" className={styles.Img} />

                    <div className={styles.movieInfos}>
                        <h2>Nome do Filme</h2>
                        <p>Data </p>
                        <p>Descriçao</p>
                        <p>Generos</p>

                    </div>

                </div>

                <iframe className={styles.video} height="350" src='https://www.youtube.com/embed/DGnatLS9Ohw'>
                </iframe>
            </div>

        </main>

    );
}

export function getServerSideProps(context: any) {
    const { movieName } = context.query;

    return {
        props: { movieName }
    }
}