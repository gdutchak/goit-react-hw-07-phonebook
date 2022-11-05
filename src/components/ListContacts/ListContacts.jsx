import { useSelector, useDispatch } from 'react-redux';
import { Item, ButtonList } from './ListContacts.styled';
import { fetchContacts, deleteContact } from 'redux/operationsContacts';
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const ListContacts = () => {
    const dispatch = useDispatch()
    let contact = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter);
    const loading = useSelector((state) => state.contacts.isLoading)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    if (filter) {
        contact = contact.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    }
    return (<ul>
        {loading && <ClipLoader />}
        {contact && contact.map(({ name, phone, id }) =>
            <Item key={id}>{name}: {phone}
                <ButtonList type='ButtonList' onClick={() => dispatch(deleteContact(id))} disabled={loading}>Delete</ButtonList>
            </Item >)}
    </ul >)
}