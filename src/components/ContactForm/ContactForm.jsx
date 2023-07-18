
import PropTypes from 'prop-types';

import { ContainerForm, ContactLabel, ContactInputForm, Button } from './ContactForm.styled';
import { useState } from 'react';

export default function ContactForm({addContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    addContact({name, number});
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
      <ContainerForm onSubmit={handleSubmit}>
        <ContactLabel>
          <ContactInputForm
            onChange={handleChangeName}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />Name
        </ContactLabel>
        <ContactLabel>
          <ContactInputForm
            onChange={handleChangeNumber}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />Number
        </ContactLabel>
        <Button type="submit">Add contact</Button>
      </ContainerForm>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
}
