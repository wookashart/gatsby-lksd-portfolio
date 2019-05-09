import React from 'react';
import styled from 'styled-components';
import Header from '../global/H2Underline';
import WorkList from './work/WorkList';
import { MaxWidthBox } from '../global/MaxWidthBox';
import { Hr } from '../global/Hr';

// images
import pictemi from '../../images/works/moje-gry.jpg';
import colgateprofessional from '../../images/works/colgateprofessional.jpg';
import meridol from '../../images/works/meridol.jpg';
import kreacjabogactwa from '../../images/works/kreacja-bogactwa.jpg';
import motoexpert from '../../images/works/motoexpert-page.jpg';

export default () => (
    <WorkSection data-section="nav5">
        <MaxWidthBox>
            <Header id="workTitle" />
            <WorkList list={[
                {
                    title: 'work1Title',
                    description: 'work1Description',
                    img: pictemi,
                    url: 'https://www.google.pl',
                    customColor: '#4f5689'
                },
                {
                    title: 'work2Title',
                    description: 'work2Description',
                    img: colgateprofessional,
                    url: 'https://www.colgateprofessional.com/',
                    customColor: '#ed1d24'
                },
                {
                    title: 'work3Title',
                    description: 'work3Description',
                    img: meridol,
                    url: 'https://www.accueil.meridol.fr/',
                    customColor: '#159fdb'
                },
                {
                    title: 'work4Title',
                    description: 'work4Description',
                    img: kreacjabogactwa,
                    url: 'https://www.kreacjabogactwa.pl/',
                    customColor: '#25a186'
                },
                {
                    title: 'work5Title',
                    description: 'work5Description',
                    img: motoexpert,
                    url: 'https://www.motoexpertsklep.pl/',
                    customColor: '#2a2926'
                }
            ]} />
            <Hr />
        </MaxWidthBox>
    </WorkSection>
);

const WorkSection = styled.section``;
