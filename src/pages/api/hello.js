import { log } from 'next-axiom';

export default async function handler(req, res) {
	log.info('hello from /api/hello');
	await res.revalidate('/');
	return res.status(200).json({ message: 'success' });
}
