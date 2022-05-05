import React from 'react'
import { Features } from './Features'
import './Main.css'
import { Specs } from './Specs';

function Main() {
  const lorem = "Lorem Ipsum has been the industrys standard dummy text ever  since ths, when an unknown printer took a galle of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";
  return (
    <>
    <section className='profile'>  
      <div className='header'>
        <div className='container flex'>
          <div className='profile-pic item flex-item-1'>
            <img src="images/farmer.svg" alt="" srcset="" />
          </div>
          <div className='name item flex-item-1 grow2'>
            <h1>Matheus Antonelli de Oliveira</h1>
          </div>
          <div className='box-info item flex-item-1'>
            <div className='info-feature'>
             <img src="images/loc1.svg" alt="" /> Foz do Iguaçu - PR
             <img src="images/mail.svg" alt="" /> matheus@gmail.com
            </div>
          </div>
        </div>
        <Features
          title={'Objetivos:'}
          content={lorem}
        />
        <hr className='horizontal'/>
        <Features
          title={'Habilidades:'}
          content={lorem}
        />
        <hr className='horizontal'/>
        <Specs title={'Idiomas'}
          content={'Portugues'} props={'Espanhol'} />
          <hr />
        <Specs title={'Cursos'}
          content={'Introdução ao HTML'} props={'Tecnico em agropecuaria'} />
      </div>
        
        </section>
        
    </>
  )
}

export default Main