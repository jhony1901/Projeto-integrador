
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
      const response = await fetch(`/api/action/movie/select`, {
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

  function movieClick(moviename: string) {
    router.push('/movie/' + moviename);
  }

  return (

    <main id={styles.main} className='flex min-h-screen flex-col'>
      <nav className={styles.navbar}>
        
        <img className={styles.icon} src="/cinemaicon.jfif" alt="" />
        
        <input className={styles.searchBar} type="text" />


        <div>
          <Link className={styles.Criar} href={'/movie/create'} >Criar Filme </Link>
          <button className={styles.button}>Logout</button>
        </div>
      </nav>

      <div className={styles.maincontainer}>


        <div className={styles.leftcontainer}>
        </div>



        <div className={styles.rightcontainer}>

          {data != undefined && data instanceof Array ?

            data.map(movie => (

              <div onClick={() => { movieClick(movie.name) }} className={styles.Card}>
                <img src={movie.imageURL} alt="" className={styles.cardImg} />
                <div className={styles.Cardinfos}>
                  <h2>{movie.name}</h2>
                  <p> {movie.releasedate}</p>
                  <p>Generos</p>
                </div>
              </div>
            ))


            :

            <p>No movies found</p>

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