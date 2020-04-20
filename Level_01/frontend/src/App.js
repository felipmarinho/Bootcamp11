import React, { useState, useEffect } from 'react';

import api from './services/api';
import './App.css';
import Header from './components/Header';

function App() {
	const [projects, setProjects] = useState([]);

	async function handleAddProject() {
		const title = `Novo projeto ${Date.now()}`;
		const owner = 'Felipe Marinho';
		const response = await api.post('projects', { title, owner});
		setProjects([...projects, response.data]);
	}

	useEffect(() => {
		api.get('projects')
			.then((response) => {
				console.log(response);
				setProjects(response.data)
			})
	}, [])

	return (
		<>
			<Header title="Projects" />

			<ul>
				{
					projects.map((project) => (
						<li key={project.id}>{project.title} - {project.owner}</li>)
					)
				}
			</ul>

			<button type="button" onClick={handleAddProject}>Adicionar projetos</button>
		</>
	);
}

export default App;