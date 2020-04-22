/**
 * Para criar: name, email, password
 */
// Interfaces: são formar de definir tipagens de conjuntos de dados, principalmente objetos no JS
// Seus tipos pode ser: string, number, boolean, object, Array
// Sempre que precisamos definir o formato de um objeto criamos uma interface
interface TechObject {
	title: string,
	experience: number;
}

interface CreateUserData {
	name?: string;
	email: string;
	password: string;
	// techs: string[]; // Podemos usar nesse formato se for um tipo unico de dados
	techs: Array<string | TechObject>; // um array de multiplos tipos, que aceita string OU TechObject, nesse caso.
}
// Versão 01
// export default function createUser(name = '', email: string, password: string) {
// 	const user = { name, email, password, }

// 	return user;
// }

export default function createUser({name, email, password}: CreateUserData) {
	const user = { name, email, password, }

	return user;
}