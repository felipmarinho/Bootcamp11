import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

	const user = createUser({
		email: 'felipe@lala',
		password: '123',
		techs: [
			'Node.js',
			'ReactJS',
			'React Native',
			{ title: 'Javascript', experience: 100 },
		]
	});

	return response.json(user);
}