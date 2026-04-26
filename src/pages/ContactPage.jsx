import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { getEmailJsConfig } from '../config/emailjs.js';
import { EmailIcon, GitHubIcon, LinkedinIcon } from '../components/Icons.jsx';
import Gap from '../components/Gap.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

const OWNER_EMAIL = 'maazbukhari99@live.com';

const initialForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export default function ContactPage() {
    const { pathname } = useLocation();
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const emailJs = getEmailJsConfig();

    useRevealOnScroll('.contactReveal', pathname);

    useEffect(() => {
        document.title = 'Contact | Maaz';
    }, []);

    const update = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
        if (status !== 'idle') setStatus('idle');
        setErrorMessage('');
    };

    const openMailtoFallback = () => {
        const q = new URLSearchParams({
            subject: form.subject || 'Portfolio inquiry',
            body: `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        });
        window.location.href = `mailto:${OWNER_EMAIL}?${q.toString()}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in your name, email, and message.');
            return;
        }

        if (!emailJs) {
            openMailtoFallback();
            return;
        }

        setStatus('sending');
        try {
            await emailjs.send(
                emailJs.serviceId,
                emailJs.templateId,
                {
                    from_name: form.name.trim(),
                    reply_to: form.email.trim(),
                    subject: form.subject.trim() || 'Portfolio contact form',
                    message: form.message.trim(),
                },
                { publicKey: emailJs.publicKey }
            );
            setStatus('success');
            setForm(initialForm);
        } catch (err) {
            console.error(err);
            setStatus('error');
            const msg =
                typeof err?.text === 'string'
                    ? err.text
                    : typeof err?.message === 'string'
                      ? err.message
                      : 'Something went wrong. Try email directly or mailto below.';
            setErrorMessage(msg);
        }
    };

    return (
        <>
            <Gap size={48} orientation="vertical" />
            <div className="contactPageBackRow contactReveal">
                <Link to="/" className="projectDetailBack">
                    ← Home
                </Link>
            </div>

            <div className="contactPageLayout">
                <section className="contactPageIntro contactReveal">
                    <p className="contactPageEyebrow">Let&apos;s talk</p>
                    <h1 className="contactPageTitle">
                        Build something <span className="gradientProjects">reliable</span>
                    </h1>
                    <p className="contactPageLead">
                        Mobile, web, or backend—tell me about your product, timeline, and what success looks like.
                        I&apos;ll reply from the address below.
                    </p>
                    <Gap size={28} orientation="vertical" />
                    <a href={`mailto:${OWNER_EMAIL}`} className="row emailRow contactPageEmailRow">
                        <EmailIcon size={24} />
                        <span className="emailText">{OWNER_EMAIL}</span>
                    </a>
                    <Gap size={20} orientation="vertical" />
                    <div className="row socialRow contactPageSocial">
                        <a
                            href="https://github.com/maazb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="githubIcon"
                            aria-label="GitHub"
                        >
                            <GitHubIcon size={26} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/syed-maaz-ur-rehman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedinIcon"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={28} />
                        </a>
                    </div>
                </section>

                <section className="contactPageFormCard contactReveal">
                    <h2 className="contactPageFormTitle">Send a message</h2>
                    {!emailJs ? (
                        <p className="contactPageConfigNote" role="status">
                            EmailJS is not configured in this environment. Submitting will open your mail client
                            instead. For in-browser send, add{' '}
                            <code className="contactPageCode">VITE_EMAILJS_*</code> keys in{' '}
                            <code className="contactPageCode">.env.local</code>.
                        </p>
                    ) : null}

                    <form className="contactForm" onSubmit={handleSubmit} noValidate>
                        <div className="contactFormRow">
                            <label className="contactFormLabel" htmlFor="contact-name">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                className="contactFormInput"
                                type="text"
                                name="name"
                                autoComplete="name"
                                value={form.name}
                                onChange={update('name')}
                                placeholder="Your name"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="contactFormRow">
                            <label className="contactFormLabel" htmlFor="contact-email">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                className="contactFormInput"
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={update('email')}
                                placeholder="you@example.com"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="contactFormRow">
                            <label className="contactFormLabel" htmlFor="contact-subject">
                                Subject <span className="contactFormOptional">(optional)</span>
                            </label>
                            <input
                                id="contact-subject"
                                className="contactFormInput"
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={update('subject')}
                                placeholder="Project / role / collaboration"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="contactFormRow">
                            <label className="contactFormLabel" htmlFor="contact-message">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                className="contactFormTextarea"
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={update('message')}
                                placeholder="What are you trying to ship?"
                                disabled={status === 'sending'}
                            />
                        </div>

                        {status === 'error' && errorMessage ? (
                            <p className="contactFormError" role="alert">
                                {errorMessage}
                            </p>
                        ) : null}
                        {status === 'success' ? (
                            <p className="contactFormSuccess" role="status">
                                Message sent—thanks! I&apos;ll get back to you soon.
                            </p>
                        ) : null}

                        <div className="contactFormActions">
                            <button
                                type="submit"
                                className="buttonPrimary"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending'
                                    ? 'Sending…'
                                    : emailJs
                                      ? 'Send message'
                                      : 'Open in email app'}
                            </button>
                            <button
                                type="button"
                                className="buttonSecondary"
                                onClick={openMailtoFallback}
                                disabled={status === 'sending'}
                            >
                                Use mailto
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <Gap size={80} orientation="vertical" />
        </>
    );
}
