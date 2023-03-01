import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'andersoncapriles',
        email: 'andersoncapriles@gmail.com',
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
    //   console.log('Component mounted');
    }, [])
    
    useEffect(() => {
    //   console.log('State changed');
    }, [formState])
    
    useEffect(() => {
    //   console.log('Email changed');
    }, [email])
    

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='andersoncapriles@gmail.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            {(username === 'andersoncapriles2') && <Message />}
        </>
    )
}
