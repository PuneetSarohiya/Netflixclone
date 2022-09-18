import React from 'react'
import { useState } from 'react'
import StripeCheckOut from 'react-stripe-checkout'
import './ProfileScreen.css'

const Stripe = ({price}) => {
    const [isSubscribe, setIsSubscribe] = useState('')
    const priceForStripe = price * 100
   // const publishableKey = 'pk_live_51KAm2BSCfDtGSBHhgo7qJMS8kofiKgKodAglxYPfL84PYyCN9ZXXXaDxKw05vNnK2WvdlCWJckfZ7AeboD08Zi2d003YyOK0vz'

    const publishableKey = 'pk_test_51KEnjbSFYSap8aJmQUtF6HRppDOUU7WhUxMRpQtS32Onpo17JAletQBtBXSw7jf2yglJVIj9puoAvEFtnYZfgZB800fgUiL17D'
    const onToken = token => {
        alert('Payment Successful')
        setIsSubscribe(token.card.id)
    }
    return (
        <StripeCheckOut 
            label='Subscribe'
            name='Netflix Clone'
            billingAddress
            description={`Your Total is ${price}`}
            amount = {priceForStripe}
            panelLabel='Subscribe'
            token={onToken}
            stripeKey={publishableKey}
        >
          {isSubscribe === '' ? <button className='plan__btn'>Subscribe</button> : <button className='plan__btn__disable'>UnSubscribe</button>}  
        </StripeCheckOut>
    )
}

export default Stripe;
