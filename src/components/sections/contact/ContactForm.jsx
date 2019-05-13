import React from 'react';
import styled from 'styled-components';
import ButtonBase from '../../global/ButtonBase';
import media from '../../../styles/media';
import { FormattedMessage } from 'react-intl';

export default () => (
    <ContactForm action="https://formspree.io/lukasz.krawczyk@lksd.pl" method="POST">
        <h5>
            <FormattedMessage id="contactFormTitle" />
        </h5>
        <ContactInfo>
            <div className="contact__info">
                <label>
                    <FormattedMessage id="contactFormName" />
                    <input type="text" name="name" />
                </label>
                <label>
                    <FormattedMessage id="contactFormEmail" />
                    <input type="email" name="_replyto" />
                </label>
                <label>
                    <FormattedMessage id="contactFormSubject" />
                    <input type="text" name="subject" />
                </label>
            </div>
            <div className="contact__message">
                <label>
                    <FormattedMessage id="contactFormMessage" />
                    <textarea name="message"></textarea>
                </label>
            </div>
        </ContactInfo>
        <div className="contact__button">
            <ButtonBase id="contactFormSubmit" type="submit" />
        </div>
    </ContactForm>
);

const ContactForm = styled.form`
    flex: 2;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 1px;
        top: 0;
        bottom: 0;
        left: auto;
        right: -20px;
        height: 90%;
        margin: auto;
        background-color: var(--gray);
        margin-left: 30px;
    }

    .contact__button {
        position: relative;
        top: -10px;
        width: 100%;
        text-align: right;
        padding-right: 20px;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-flow: column;

    ${media.desktop} {
        flex-flow: row;
    }

    label {
        display: flex;
        flex-flow: column;
        margin: 10px 0;
    }

    span {
        font-size: 1.4rem;
    }

    .contact {
        &__info,
        &__message {
            flex: 1;
            display: flex;
            flex-flow: column;
            margin-right: 20px;
        }

        &__message {
            
        }
    }

    input[type="text"],
    input[type="email"],
    textarea {
        height: 35px;
        border: 1px solid var(--black);
        margin-top: 5px;
        padding: 5px;

        &:focus {
            outline: none;
            border: 1px solid var(--orange);
        }
    }

    textarea {
        height: 187px;
        resize: none;
    }
`;
