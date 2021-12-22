import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {GetComponent} from '../../import file/import';
import {getContact} from '../../Redux/Contact/Actions'
const Contacts = () => {
    return (
        <div>            <GetComponent action={getContact()} reducer={(state)=>state.contactStore.contact} />
        </div>
    )
}

export default Contacts
