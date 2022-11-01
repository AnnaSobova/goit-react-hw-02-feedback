import React from 'react';
import Proptypes from 'prop-types';
import Title from './Section.styled';

const Section =({title,children})=>(
    <section>
        {title && <Title>{title}</Title>}
        {children}
    </section>
);
export default Section;
Section.proptotype={
    title:Proptypes.string.isRequired,
};
