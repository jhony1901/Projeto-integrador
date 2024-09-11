import Head from "next/head"
import style from '@/styles/Createmovie.module.css'
import { useState } from "react"

export default function createMovie(){
    const [ formData , setformaData] = useState(
        {
            name : '',
            realeseDate :'',
            imageURL: '',
            videoURL : '',
            description : ''
        }
    );

    function handleformEdit (event:any , field:string){
        setformaData({
            ...formData,
            [field] : event.target.value
        });
    }
    async function formSubmit(event:any) {
        
        try{
            const response = await fetch(`/api/action/Movie/Create`,
                {
                    method:'POST',
                    headers: {'content-type' : 'application/json'},
                    body: JSON.stringify(formData)
                }
            );

            const responseJson = await response.json();

            alert(responseJson.message);

        }
        catch(err) {
            console.log(err);
        }
        
    }

    return(
        <main  className='flex min-h-screen flex-col'>
            <Head>
                <title>Cadastro de Filmes</title>
            </Head>

            <div>
                <form className={style.formcontainer} onSubmit={formSubmit}>
                    <input className={style.Nome} type="text" placeholder="Nome" onChange={(event)=>{handleformEdit(event,'name')}}/>
                    <p className={style.date}>Data de lançamento<input type="date" onChange={(event)=>{handleformEdit(event,'releasedate')}}/></p>
                     <p className={style.image}>imagem: <input type="file"/></p>
                     <br /><br />
                     <input type="text" placeholder="link para video(youtube) do filme" onChange={(event)=>{handleformEdit(event,'videoURL')}}/>
                     <br /><br />
                     <textarea className= {style.input} placeholder="Descrição do filme" onChange={(event)=>{handleformEdit(event,'description')}}/>
                     <br /><br />
                     <input className={style.button} type="submit" value="enviar" />
                </form>
            </div>
        </main>
    )
}