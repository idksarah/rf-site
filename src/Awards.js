import React from 'react';
import './Awards.css';
import TopBar from './components/TopBar';
import { CardHorizontalText } from './Blog';

function Awards(){
    return(
    <>
        <TopBar/>
        <div className='content'>
            <CardHorizontalText 
                title="2022-23 Power Play" 
                content={
                    `NorCal FTC - South Bay Metro League\n
            ⇒ Ranked #2 & WAC 1st pick at League tournament\n
            ⇒ California Ranked - 3rd\n
            ⇒ California 4th Highest Score\n
            ⇒ Innovate Award Winner\n
            \n
            NorCal FTC - Regional Championship\n
            ⇒ Sillicone Division Winning Alliance Captain\n
            ⇒ Finalist Alliance Captain\n
            ⇒ Think Award 3rd Place\n
            ⇒ World Ranked -top 30's (OPR 145 pts)\n
            \n
            Maryland Tech Invitational, APL John Hopkins University​\n
            ⇒ Ranked #15 (2023) among 40 teams worldwide`
                }
            />
            <CardHorizontalText title="2021-2022 Freight Frenzy" content={`
            NorCal FTC - Northern Saratoga Qualifying Tournament \n

            ⇒ Inspire Award - 1st\n

            ⇒ Winning Alliance - Captain\n

            NorCal FTC - Regional Championship REMOTE\n

            ⇒ 1st Pick, Winning Alliance Captain at Semi-Finals\n

            ⇒ Collins Aerospace Innovate Award - 3rd Place\n

            Maryland Tech Invitational, APL John Hopkins University​\n

            ⇒ Ranked #19 (2023) among 39 international teams`}/>
            <CardHorizontalText title="2020-2021 Ultimate Goal (Remote)" content={`NorCal FTC - Fremont #4 Qualifying Tournament REMOTE

            ⇒ Collins Aerospace Innovate Award - 1st\n

            ⇒ Motivate Award - 2nd Place\n

            ⇒ Top Ranked - 2nd Place\n

            NorCal FTC - Fremont #1 Qualifying Tournament REMOTE\n

            ⇒ Design Award - 1st\n

            ⇒ Top Ranked - 3rd Place\n

            NorCal FTC - Regional Championship REMOTE\n

            ⇒ Think Award - 3rd Place`}/>
            <CardHorizontalText title="2019-2020 Skystone" content={`Sacramento Qualifying Tournament

            ⇒ Winning Alliance - Captain\n

            ⇒ Think Award Winner\n

            NorCal FTC Napa Qualifying Tournament\n

            ⇒ Collins Aerospace Innovate Award - 3rd Place\n

            ⇒ Innovate Award - 2nd Place\n

            ⇒ Semifinalist Alliance - 1st Pick​\n

            NorCal FTC - Regional Championship\n

            ⇒ Semifinalist Alliance- 2nd pick`}/>
        </div>

    </>
    );
}
export default Awards;