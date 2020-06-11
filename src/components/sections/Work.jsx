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
import mbankLotneBrygady from '../../images/works/mbank-lotne-brygady.jpg';
import mercedesZlotoDlaZuchwalych from '../../images/works/mercedes-zloto-dla-zuchwalych.jpg';
import pictemi from '../../images/works/pictemi.jpg';
import tictac from '../../images/works/tictac.jpg';
import ipos from '../../images/works/ipos.jpg';

export default () => (
    <WorkSection data-section="nav5">
        <MaxWidthBox>
            <Header id="workTitle" />
            <WorkList list={[
                {
                    title: 'work1Title',
                    description: 'work1Description',
                    company: 'work1Company',
                    img: motoexpert,
                    url: 'https://www.motoexpertsklep.pl',
                    customColor: '#2a2926'
                },
                {
                    title: 'work2Title',
                    description: 'work2Description',
                    company: 'work2Company',
                    img: centercar,
                    url: 'https://www.centercar.pl',
                    customColor: '#ffb10f'
                },
                {
                    title: 'work3Title',
                    description: 'work3Description',
                    company: 'work3Company',
                    img: colgateprofessional,
                    url: 'https://www.colgateprofessional.com',
                    customColor: '#ed1d24'
                },
                {
                    title: 'work4Title',
                    description: 'work4Description',
                    company: 'work4Company',
                    img: sanex,
                    url: 'https://www.sanex.co.uk',
                    customColor: '#009bde'
                },
                {
                    title: 'work5Title',
                    description: 'work5Description',
                    company: 'work5Company',
                    img: palmolive,
                    url: 'https://www.palmolive.co.uk',
                    customColor: '#009390'
                },
                {
                    title: 'work6Title',
                    description: 'work6Description',
                    company: 'work6Company',
                    img: mygames,
                    url: 'http://games.wookashart.usermd.net',
                    customColor: '#2285ea'
                },
                {
                    title: 'work7Title',
                    description: 'work7Description',
                    company: 'work7Company',
                    img: meridol,
                    url: 'https://www.accueil.meridol.fr',
                    customColor: '#159fdb'
                },
                {
                    title: 'work8Title',
                    description: 'work8Description',
                    company: 'work8Company',
                    img: kreacjabogactwa,
                    url: 'https://www.kreacjabogactwa.pl',
                    customColor: '#25a186'
                },
                {
                    title: 'work9Title',
                    description: 'work9Description',
                    company: 'work9Company',
                    img: mbankLotneBrygady,
                    url: 'https://www.mbank.pl/lp2/2019/indywidualny/konta/ekonto-mozliwosci-tour',
                    customColor: '#0000ff'
                },
                {
                    title: 'work10Title',
                    description: 'work10Description',
                    company: 'work10Company',
                    img: mercedesZlotoDlaZuchwalych,
                    url: 'https://goldedition.mercedes-benz.pl',
                    customColor: '#2a2a2a'
                },
                {
                    title: 'work11Title',
                    description: 'work11Description',
                    company: 'work11Company',
                    img: pictemi,
                    url: 'https://pictemi.com/pl/',
                    customColor: '#3b3b5f'
                },
                {
                    title: 'work12Title',
                    description: 'work12Description',
                    company: 'work12Company',
                    img: tictac,
                    url: 'https://www.tictac.com/pl/pl/',
                    customColor: '#008857'
                },
                {
                    title: 'work13Title',
                    description: 'work13Description',
                    company: 'work13Company',
                    img: ipos,
                    url: 'https://ipos.pl/',
                    customColor: '#1DA239'
                }
            ]} />
            <Hr />
        </MaxWidthBox>
    </WorkSection>
);

const WorkSection = styled.section``;
