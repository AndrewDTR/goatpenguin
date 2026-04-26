import { createHmac, timingSafeEqual } from 'crypto';
import { env } from '$env/dynamic/private';

export function adminToken(): string | null {
	if (!env.ADMIN_PASS) return null;
	return createHmac('sha256', env.ADMIN_PASS).update('admin').digest('hex');
}

export function isAuthed(cookieValue: string | undefined): boolean {
	const expected = adminToken();
	if (!expected || !cookieValue) return false;
	const a = Buffer.from(cookieValue);
	const b = Buffer.from(expected);
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
}
