import React, {useState} from 'react';
import imge from './3.png';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
// import {BrowserRouter ,Routes , Route} from 'react-router-dom';
export default function Signup() {

    const navigate = useNavigate();
    const [registerInput,setRegister] = useState({
        nom : '',
        prenom : '',
        email : '',
        password : '',
        error_list : []
    });
    
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]:e.target.value })
    }
    
    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            nom: registerInput.nom,
            prenom: registerInput.prenom,
            email: registerInput.email,
            password: registerInput.password,
        }

       
            axios.post(' api/register', data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)//save the token and name on local storage application
                    swal('Success', res.data.message, 'success')
                    navigate('/')
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            })
        
    }
        return (
            <div>

                <form className="form" onSubmit={registerSubmit} >
                    <img src={imge} className="imgSin" />
                    <h1 className='po'>SOYEZ LE PREMIER INFORMÉ</h1>
                    <h4 className='sq'>Inscrivez-vous pour recevoir les e-mails Nike et profiter avant tout le monde de notre actu, de contenus passionnants et d'offres exclusives</h4>
                    <h4 className='h42'>Adresse e-mail*</h4>
                    <input type="email" name="email" placeholder="entre votre email address" className="email" value={registerInput.email}  onChange={handleInput}/>
                    <h4 className='h42' >Prénom*</h4>
                    <input type="text" name="nom" placeholder="entre votre nom" className="text"  value={registerInput.nom} onChange={handleInput}/>
                    <h4 className='h42'>Nom de Famille*</h4>
                    <input type="text" name="prenom" placeholder="entre votre prenom" className="text"  value={registerInput.prenom} onChange={handleInput}/>
                    <h4 className='h42'>password</h4>
                    <input type="password" name="password" className="password" placeholder='entre votre password' value={registerInput.password} onChange={handleInput}/>
                    <h4 className='h42'>Préférence d'achat*</h4>
                    <select className='option'>
                        <option style={{ color: "#a6a6a6", border: "1px solid balack" }}>Préférence d'achat</option>
                    </select>
                    <input type="checkbox" name="checked" value="checked" className='chek' />
                    <h5>Abonnez-vous aux e-mails pour recevoir des mises à
                        jour de Nike sur les produits, les offres et vos avantages
                        de membre</h5>
                    <input type="checkbox" name="checked" value="checked" className='cheka' />
                    <h5 className=''>J'accepte<a href="" className='con'> la politique de confidentialité et les conditions d'utilisation de Nike .</a></h5>
                    <button type="submit" className="sub">Créer un compte</button>
                </form>

            </div>


        )
    }