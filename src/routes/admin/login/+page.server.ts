import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import { timingSafeEqual } from 'crypto';
import { adminToken, isAuthed } from '$lib/server/auth';

function secureCompare(a: string, b: string): boolean {
	if (a.length !== b.length) {
		return false;
	}
	return timingSafeEqual(Buffer.from(a, 'utf8'), Buffer.from(b, 'utf8'));
}

export const load: PageServerLoad = async ({ cookies }) => {
	if (isAuthed(cookies.get('admin'))) {
		redirect(303, '/admin');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const pw = String(data.get('password') ?? '');

		if (!env.ADMIN_PASS || !secureCompare(pw, env.ADMIN_PASS)) {
			return fail(400, { error: 'Incorrect password' });
		}

		const token = adminToken();
		if (!token) {
			return fail(500, { error: 'Server misconfigured' });
		}

		cookies.set('admin', token, {
			httpOnly: true,
			sameSite: 'lax',
			secure: true,
			path: '/',
			maxAge: 60 * 60 * 8
		});

		redirect(303, '/admin');
	}
};
