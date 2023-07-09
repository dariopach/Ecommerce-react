import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [direction, setDeliveryDirection] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, direction
        };

        onConfirm(userData)
    };

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        placeholder="Juan Perez"
                        required
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>

                <label className='Label'>
                    Dirección de entrega
                    <input
                        className='Input'
                        type='text'
                        placeholder="Calle falsa 1234, ap 101"
                        required
                        value={direction}
                        onChange={({ target }) => setDeliveryDirection(target.value)}
                    />
                </label>

                <label className='Label'>
                    Telefono
                    <input
                        className='Input'
                        type='text'
                        placeholder="123456789"
                        required
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>

                <label className='Label'>
                    Email
                    <input
                        className='Input'
                        type='text'
                        placeholder="ejemplo@coder.com"
                        required
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>

                <div className='Label'>
                    <button type='submit' className='Button'>Crear Orden de compra</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm