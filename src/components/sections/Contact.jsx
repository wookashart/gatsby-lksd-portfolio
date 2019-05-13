import React from 'react';
import styled from 'styled-components';
import Header from '../global/H2Underline';
import { MaxWidthBox } from '../global/MaxWidthBox';
import ContactInfo from './contact/ContactInfo';

export default () => (
    <Contact data-section="nav6">
        <MaxWidthBox>
            <Header id="contactTitle" />
            <ContactInfo info={[
                { text: 'contactPhoneNumber', type: 'tel', contact: '+48515598375' },
                { text: 'contactEmail1', type: 'mail', contact: 'lukasz.krawczyk@lksd.pl' },
                { text: 'contactEmail2', type: 'mail', contact: 'luki88kr@gmail.com' }
            ]} />
        </MaxWidthBox>
    </Contact>
);

const Contact = styled.section`

`;
