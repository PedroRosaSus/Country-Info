import React, { Component, useEffect, useState } from 'react';
import axios from "axios";

// CHINA, USA, Brazil, Nigeria, Russia, Australia


export function Funcao()
{
    const [pais, setPais] = useState('');
    const [moeda, setMoeda] = useState('');
    const [lingua, setLingua] = useState('');
    const [name, setname] = useState('');
    const [nativeName, setNativeName] = useState('');
    const [capital, setCapital] = useState('');
    const [languages, setlanguages] = useState('');
    const [region, setregion] = useState('');
    const [population, setpopulation] = useState('');
    const [currencies, setcurrencies] = useState('');
    const [flag, setflag] = useState('');
    const [simbolo, setsimbolo] = useState('');
    
    function Africa()
    {
        setPais('Nigeria');
    }
    function AmericaS()
    {
        setPais('Brazil');
    }
    function AmericaN()
    {
        setPais('USA');
    }
    function Asia()
    {
        setPais('China');
    }
    function Oceania()
    {
        setPais('Australia');
    }
    function Europa()
    {
        setPais('Russia');
    }

    function lerNome()
    {
        axios.get(`https://restcountries.com/v2/name/${pais}`)
        .then((response) => {
            setname(response.data[0].name);
            
            setNativeName(response.data[0].nativeName);
            
            setCapital(response.data[0].capital);
            
            setlanguages(() => {
                let linguas ='';
                console.log(response.data[0].languages[0].name)
                response.data[0].languages.forEach(element => {
                    linguas += element.name + ". "
                    console.log(linguas)
                });
                return linguas;
            });
            
            setregion(response.data[0].region);
            
            setpopulation(response.data[0].population);
            
            setsimbolo(response.data[0].currencies[0].symbol);
    
            setcurrencies(response.data[0].currencies[0].name);

            setflag(response.data[0].flag);            

          })
        
    }

    function lerMoeda() 
    {
        axios.get(`https://restcountries.com/v3.1/currency/${moeda}`)

    }
    
    function lerLingua()
    {
        console.log(`${lingua}`)
    }

    return (
        <div>
            <script src='components/JS.js'></script>
            <h1>Country Info</h1>
            <h1>__________________________________________</h1>
           
            <div>
                <h1>Search for...</h1>
                <textarea value={pais} placeholder='Country name' onChange={event => setPais(event.target.value)}></textarea> 
                <button type='submit' onClick={lerNome}  className="btn btn-primary m-2">Search</button> 
                <h1>__________________________________________</h1>
                <h1>Most popular country (per continent)</h1>
                <button type='submit' onClick={Africa}className="btn btn-primary m-2">Africa</button>
                <button type='submit' onClick={AmericaN}className="btn btn-primary m-2">North America</button>
                <button type='submit' onClick={AmericaS}className="btn btn-primary m-2">South America</button>
                <button type='submit' onClick={Asia} className="btn btn-primary m-2">Asia</button>
                <button type='submit' onClick={Europa}className="btn btn-primary m-2">Europe</button>
                <button type='submit' onClick={Oceania}className="btn btn-primary m-2">Oceania</button>
                <h1>__________________________________________</h1>
                <h1>Common Name-------------{name}</h1>
                <h1>Native Name----------------{nativeName}</h1>
                <h1>Capital-----------------------{capital}</h1>
                <h1>Languages-------------------{languages}</h1>
                <h1>Region-----------------------{region}</h1>
                <h1>Population-------------------{population}</h1>
                <h1>Currency---------------------{currencies}</h1>
                <h1>Symbol-----------------------{simbolo}</h1>
            </div>
           <img src={flag} />
        </div>
        );
}


