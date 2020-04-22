export function helloWorld(request: Request, response: Response) {
	return response.json({ message: 'Hello world' });
}