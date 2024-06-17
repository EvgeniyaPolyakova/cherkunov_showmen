import { AboutMe } from '@/components/about-me';
import { Footer } from '@/components/footer';
import { Form } from '@/components/form';
import { Intro } from '@/components/intro';
import { Layout } from '@/components/layout';
import { VkPlayer } from '@/components/player';
import { Reviews } from '@/components/reviews';
import { Sale } from '@/components/sale';
import { Services } from '@/components/services';
import { Steps } from '@/components/steps';
import Head from 'next/head';
import React from 'react';

const MainPage = () => {
	return (
		<>
			<Head>
				<title>Ведущий Юрий Черкунов</title>
			</Head>
			<Layout>
				<Intro />
				<AboutMe />
				<Services />
				<Sale />
				<Steps />
				<Reviews />
				<Form />
				<Footer />
			</Layout>
		</>
	);
};

export default MainPage;
