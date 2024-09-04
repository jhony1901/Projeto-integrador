import style from '@/styles/Login.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
//import { checktoken } from '@/services/tokenConfig';
import { useRouter } from 'next/router';


export default function loginPage(){
    const router = useRouter();

    const [ formData , setFormData ] = useState(
        {
            username: '',
            password: ''
        }
    );

    function handlerformEdit(event:any , field:string){
        setFormData({
            ...formData,
            [field] : event.target.value
        });
    }


    async function formSubmit (event:any) {
        event.preventDefault();
        console.log(formData);

        try{
            const response = await fetch(`/api/action/user/login` ,{
                method:'POST',
                headers:{'Content-type': 'application/json'},
                body: JSON.stringify(formData)
            });


            const responsejson = await response.json();

            setCookie('authorization', responsejson.token);

            if ( response.status != 200 ){
                alert(`${responsejson.message}`);
            }
            else{
                router.push(`/`);
            }


        }
        catch(err){
            console.log(err)
        }
    }   
     
    

    return(
    

        <main className='flex min-h-screen flex-col'>
            <Head>
                <title>login</title>

            </Head>

            <form className={style.container} onSubmit={formSubmit}>
            
                <input className={style.Nome} type="text" placeholder='Nome de usuario' onChange={(event) => {handlerformEdit(event , 'username')}}/>
                <br /><br />
                <input className={style.password} type="password" placeholder='senha'onChange={(event) => {handlerformEdit(event , 'password')}}/>
                <br /><br />
                <input className={style.button} type="submit" value="login"/>

                <Link className={style.criarconta} href={`/user/register`}>Criar uma conta</Link>
            </form>
        </main>
    );
}


export function getServerSideProps( {req , res }:any){
    try{
        const token = getCookie('authorization' , {req , res} );
        if ( !token) {
            throw new Error ('invaled token');
        }

 //       checktoken(token);

        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }
    }

    catch (err) {
        return{
            props: {}
            
        }
    }
}