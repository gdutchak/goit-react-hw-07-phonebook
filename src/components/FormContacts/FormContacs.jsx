import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label, Button } from './FormContact.styled';
import { addContact } from 'redux/operationsContacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function FormContacts() {
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contacts.items)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const addContactItem = (e) => {
        e.preventDefault();
        if (contact.find(item => item.name.toLowerCase() === name.toLowerCase())) {
            alert(`This name is already in contacts!`)
            return
        }
        let data = {
            id: nanoid(),
            name,
            phone: number,
        }
        dispatch(addContact(data))
        Notify.success('This number has added in contacts!');
        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={addContactItem}>
            <Label> Name
                <Input type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required onInput={(e) => { setName(e.currentTarget.value) }} value={name} />
            </Label>
            <Label>Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required onInput={(e) => { setNumber(e.currentTarget.value) }} value={number}
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </form>
    )
}
