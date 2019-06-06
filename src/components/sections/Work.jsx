import React from 'react';
import styled from 'styled-components';
import Header from '../global/H2Underline';
import WorkList from './work/WorkList';
import { MaxWidthBox } from '../global/MaxWidthBox';
import { Hr } from '../global/Hr';

// images
import motoexpert from '../../images/works/motoexpert-page.jpg';
import centercar from '../../images/works/centercar.jpg';
import colgateprofessional from '../../images/works/colgateprofessional.jpg';
import sanex from '../../images/works/sanex.jpg';
import palmolive from '../../images/works/palmolive.jpg';
import mygames from '../../images/works/moje-gry.jpg';
import meridol from '../../images/works/meridol.jpg';
import kreacjabogactwa from '../../images/works/kreacja-bogactwa.jpg';

export default () => (
    <WorkSection data-section="nav5">
        <MaxWidthBox>
            <Header id="workTitle" />
            <WorkList list={[
                {
                    title: 'work1Title',
                    description: 'work1Description',
                    img: motoexpert,
                    url: 'https://www.motoexpertsklep.pl',
                    customColor: '#2a2926'
                },
                {
                    title: 'work2Title',
                    description: 'work2Description',
                    img: centercar,
                    url: 'https://www.centercar.pl',
                    customColor: '#ffb10f'
                },
                {
                    title: 'work3Title',
                    description: 'work3Description',
                    img: colgateprofessional,
                    url: 'https://www.colgateprofessional.com',
                    customColor: '#ed1d24'
                },
                {
                    title: 'work4Title',
                    description: 'work4Description',
                    img: sanex,
                    url: 'https://www.sanex.co.uk',
                    customColor: '#009bde'
                },
                {
                    title: 'work5Title',
                    description: 'work5Description',
                    img: palmolive,
                    url: 'https://www.palmolive.co.uk',
                    customColor: '#009390'
                },
                {
                    title: 'work6Title',
                    description: 'work6Description',
                    img: mygames,
                    url: 'http://games.wookashart.usermd.net',
                    customColor: '#2285ea'
                },
                {
                    title: 'work7Title',
                    description: 'work7Description',
                    img: meridol,
                    url: 'https://www.accueil.meridol.fr',
                    customColor: '#159fdb'
                },
                {
                    title: 'work8Title',
                    description: 'work8Description',
                    img: kreacjabogactwa,
                    url: 'https://www.kreacjabogactwa.pl',
                    customColor: '#25a186'
                }
            ]} />
            <Hr />
        </MaxWidthBox>
    </WorkSection>
);

const WorkSection = styled.section``;
