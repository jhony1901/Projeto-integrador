
import { getCookie } from "cookies-next";
import { checktoken } from "@/Services/TokenConfig";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  //constante para armazenar filme
  const [data, setData]: any = useState(undefined);

  // funcao para receber os dados dos filmes
  async function fetchData() {
    try {
<<<<<<< Updated upstream
      const response = await fetch(`/api/Action/Game/Select`, {
=======
      const response = await fetch(`/api/action/Game/select`, {
>>>>>>> Stashed changes
        method: 'GET',
      })

      const responseJson = await response.json();

      console.log(responseJson.data);
      setData(responseJson.data);

    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();

  }, [])

<<<<<<< Updated upstream
  function GameClick(Gamename: string) {
    router.push('/Game/' + Gamename);
=======
  function gameClick(gamename: string) {
    router.push('/Game/' + gamename);
>>>>>>> Stashed changes
  }

  return (

    <main id={styles.main} className='flex min-h-screen flex-col'>
      <nav className={styles.navbar}>
        
        <img className={styles.icon} src="/cinemaicon.jfif" alt="" />
        
        <input className={styles.searchBar} type="text" />


        <div>
<<<<<<< Updated upstream
          <Link className={styles.Criar} href={'/Game/create'} >Criar jogo </Link>
=======
          <Link className={styles.Criar} href={'/Game/Create'} >Criar Jogo </Link>
>>>>>>> Stashed changes
          <button className={styles.button}>Logout</button>
        </div>
      </nav>

      <div className={styles.maincontainer}>


        <div className={styles.leftcontainer}>
        </div>



        <div className={styles.rightcontainer}>

          {data != undefined && data instanceof Array ?

<<<<<<< Updated upstream
            data.map(Game => (

              <div onClick={() => { GameClick(Game.name) }} className={styles.Card}>
                <img src={Game.imageURL} alt="" className={styles.cardImg} />
                <div className={styles.Cardinfos}>
                  <h2>{Game.name}</h2>
                  <p> {Game.releasedate}</p>
=======
            data.map(game => (

              <div onClick={() => {gameClick(game.name) }} className={styles.Card}>
                <img src={game.imageURL} alt="" className={styles.cardImg} />
                <div className={styles.Cardinfos}>
                  <h2>{game.name}</h2>
                  <p> {game.releasedate}</p>
>>>>>>> Stashed changes
                  <p>Generos</p>
                </div>
              </div>
            ))


            :

            <p>No game found</p>

          }

        </div>

      </div>


    </main>

  )
}


export function getServerSideProps({ req, res }: any) {
  try {
    const token = getCookie('authorization', { req, res });
    if (!token) {
      throw new Error('invaled token');
    }

    checktoken(token);

    return {
      props: {}
    }
  }

  catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {}

    }
  }
}