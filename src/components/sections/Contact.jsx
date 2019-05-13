import React from 'react';
import styled from 'styled-components';
import Header from '../global/H2Underline';
import { MaxWidthBox } from '../global/MaxWidthBox';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import media from '../../styles/media';

export default () => (
    <Contact data-section="nav6">
        <MaxWidthBox>
            <Header id="contactTitle" />
            <ContactContainer>
                <ContactForm />
                <ContactInfo info={[
                    { title: 'contactPhoneNumberTitle', text: 'contactPhoneNumber', type: 'tel', contact: '+48515598375' },
                    { title: 'contactEmail1Title', text: 'contactEmail1', type: 'mail', contact: 'lukasz.krawczyk@lksd.pl' },
                    { title: 'contactEmail2Title', text: 'contactEmail2', type: 'mail', contact: 'luki88kr@gmail.com' }
                ]} />
            </ContactContainer>
        </MaxWidthBox>
    </Contact>
);

const Contact = styled.section``;

const ContactContainer = styled.div`
    display: flex;
    flex-flow: column;

    ${media.tablet} {
        flex-flow: row;
    }
`;
