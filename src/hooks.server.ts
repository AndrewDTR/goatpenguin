import { redirect } from '@sveltejs/kit';
import { isAuthed } from '$lib/server/auth';

export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/admin')) {
		const isLogin = event.url.pathname.startsWith('/admin/login');
		if (!isLogin && !isAuthed(event.cookies.get('admin'))) {
			redirect(303, '/admin/login');
		}
	}
	return await resolve(event);
}
