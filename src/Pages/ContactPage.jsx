import React from 'react'
import styled from 'styled-components'
import ContactItem from '../Components/ContactItem'
import PrimaryButton from '../Components/PrimaryButton'
import Title from '../Components/Title'
import { InnerLayout } from '../styles/Layouts'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <ContactPageStyle>
            <Title title={'Contact'} span={'contact'} />
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <form className='form' action="https://formsubmit.co/bayannidal13@gmail.com" method="POST">
                        <div className="contact-title">
                            <h4>Get in touch</h4>
                        </div>
                        <div className="form-field">
                            <label htmlFor="name" id='name' required>Name: </label>
                            <input type="text" name='name' id='name' />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email" id='email'>E-mail: </label>
                            <input type="email" name='name' id='email' required />
                        </div>
                        <div className="text-area" >
                            <label htmlFor="text-area">Enter your Message: </label>
                            <textarea name="message" id="textarea" cols="30" rows="10" required></textarea>
                        </div>
                        <input type="hidden" name="_next" value="https://bayannidal.github.io/#/thanks"></input>

                        <div className="form-field">
                            <button type="submit">
                                <PrimaryButton title={'Send'} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="right-content">
                    <ContactItem
                        icon={phone}
                        title={'Phone'}
                        contact={'+40 (724) 578 450'}
                    />
                    <ContactItem
                        icon={email}
                        title='Email'
                        contact='bayannidal13@gmail.com'
                    />
                    <ContactItem
                        icon={location}
                        title='Location'
                        contact='Cluj-Napoca, Romania'
                    />
                </div>
            </InnerLayout>
        </ContactPageStyle>
    )
}
const ContactPageStyle = styled.section`
    text-align: center;
    padding: 5rem .5rem;
    button {
        background-color: transparent;
        outline: none;
        border: none;
    }
    .contact-section {
        display:grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width:978px) {
        grid-template-columns: repeat(1,1fr);
        .form-field {
            margin-bottom: 2rem;
        }
        
    }
        .right-content {
            display: grid;
            grid-template-columns: repeat(1,1fr);
            width: 100%;
           
        }

       
        .contact-title {
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

       
        .form {
            
            width: 100%;
           
         
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;  
                label {
                    position: absolute;
                    left: 20px;
                    top: -25px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                }
                input {
                    border: 3px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                    border-radius: 10px;
                }
            }
            textarea   {
                    background-color: transparent;
                    border: 3px solid var(--border-color);
                    outline: none;
                    border-radius: 10px;
                    color: inherit;
                    padding: 1rem;
                    width: 100%;
                   

                }
                @media screen and (max-width:450px) {
                 width:100%;
                 margin: 0 auto;

            }
        }
    }
`;
export default ContactPage


function numbers(a, b) {

    return function sum() {
        return a + b;
    }
}

const sum = numbers(1, 2);

console.log(sum());
