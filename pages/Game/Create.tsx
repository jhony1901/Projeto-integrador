import Head from "next/head"
import style from '@/styles/CreateGame.module.css'
import { useState } from "react"

export default function createGame(){
    const [ formData , setformaData] = useState(
        {
            name : '',
            realesedate :'',
            description : '',
            developer: '',
            distributor: '',
            price: '',
            link: '',
            platform: '',
            image: '',
            video: ''


        }
    );

    function handleformEdit (event:any , field:string){
        setformaData({
            ...formData,
            [field] : event.target.value
        });
    }
    async function formSubmit(event:any) {
        event.preventDefault()
        try{
            const response = await fetch(`/api/action/Game/Create`,
                {
                    method:'POST',
                    headers: {'Content-type' : 'application/json'},
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
                <title>Cadastro de Jogos</title>
            </Head>

            <div>
                <form className={style.formcontainer} onSubmit={formSubmit}>
                    <input className={style.Nome} type="text" placeholder="Nome" onChange={(event)=>{handleformEdit(event,'name')}}/>
                    <p className={style.date}>Data de lançamento<input type="date" onChange={(event)=>{handleformEdit(event,'releasedate')}}/></p>
                    <br /><br />
                     <p className={style.image}>imagem: <input type="file"/></p>
                     <br /><br />
                     <input type="text" placeholder="Desenvolvedor" onChange={(event) =>{handleformEdit(event,'developer')}}/>
                     <br /><br />
                     <input type="text" placeholder="Destribuidor" onChange={(event)=> {handleformEdit(event,'distributor')}} />
                     <br /><br />
                     <input type="text" placeholder="Preço" onChange={(event)=> {handleformEdit(event,'price')}}/>
                     <br /><br />
                     <input type="text" placeholder="link" onChange={(event)=> {handleformEdit(event,'link')}} />
                     <br /><br />
                     <input type="text" placeholder="Plataforma" onChange={(event) => {handleformEdit(event,'plataform')}} />
                     <br /><br />
                     <input className={style.link}type="text" placeholder="link do Jogo" onChange={(event)=>{handleformEdit(event,'videoURL')}}/>
                     <br /><br />
                     <textarea className= {style.input} placeholder="Descrição do Jogo" onChange={(event)=>{handleformEdit(event,'description')}}/>
                     <br /><br />
                     <input className={style.button} type="submit" value="enviar" />
                </form>
            </div>
        </main>
    )
}