import { redirect } from '@sveltejs/kit';
import { isAuthed } from '$lib/server/auth';

export async function handle({ event, resolve }) {
	const route = event.route.id ?? '';
	const isAdmin = route === '/admin' || route.startsWith('/admin/');
	const isLogin = route === '/admin/login';

	if (isAdmin && !isLogin && !isAuthed(event.cookies.get('admin'))) {
		redirect(303, '/admin/login');
	}

	return await resolve(event);
}