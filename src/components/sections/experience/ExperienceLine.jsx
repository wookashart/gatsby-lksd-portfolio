import React from 'react';
import Stage from './ExperienceStage';

export default ({ xp }) => (
    <div>
        {xp.map((stage, index) => <Stage key={index} data={stage} />)}
    </div>
);
