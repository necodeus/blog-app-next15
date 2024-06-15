import { permanentRedirect, redirect } from 'next/navigation'

// 300 Multiple Choices
// 301 Moved Permanently
// 302 Found
// 303 See Other
// 304 Not Modified
// 307 Temporary Redirect
// 308 Permanent Redirect

type RedirectionProps = {
    to?: string;
    isPermanent?: boolean;
}

export default function Redirection({ to, isPermanent = false }: RedirectionProps) {
    if (isPermanent) {
        permanentRedirect(to || '/') // 308 Permanent Redirect
    } else {
        redirect(to || '/') // 307 Temporary Redirect
    }
}
