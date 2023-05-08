import React from 'react';
//import chroma from 'chroma-js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {colourOptions} from 'components/data/colors.ts';
import 'components/Main/Article/Article.css';

const animatedComponents = makeAnimated();

const Article = () => (
	<article>
		<Select
			className='w375'
			closeMenuOnSelect={false}
			components={animatedComponents}
			defaultValue={[colourOptions[4], colourOptions[5]]}
			isMulti
			options={colourOptions}
		/>
	</article>
);

export default Article;