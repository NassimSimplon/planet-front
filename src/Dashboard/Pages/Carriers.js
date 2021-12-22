import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {GetComponent} from '../../import file/import';
import {getCarrier} from '../../Redux/Carrier/Action'

const Carriers = () => {
    return (
        <div>
            <GetComponent action={getCarrier()} reducer={(state)=>state.carrierStore.carrier} />
        </div>
    )
}

export default Carriers
