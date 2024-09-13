import styles from '@/styles/Game.module.css'


export default function Game({ GameName }: any) {
    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>
            <div className={styles.page}>
                <div className={styles.game}>
                    <img src="/baudamorte.jpg" className={styles.Img} />

                    <div className={styles.movieInfos}>
                        <h2>Nome do Jogo</h2>
                        <p>Data </p>
                        <p>Descriçao</p>
                        <p>Desenvolvedor</p>
                        <p>destribuidor</p>
                        <p>Preço</p>
                        <p>Plataforma</p>
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
    const { GameName } = context.query;

    return {
        props: { GameName }
    }
}