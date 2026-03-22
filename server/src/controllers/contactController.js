import { validationResult } from 'express-validator';

export function submit(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error(errors.array()[0].msg);
    err.status = 422;
    err.details = errors.array();
    return next(err);
  }

  const { name, email, company, budget, painPoints } = req.body;

  // ── Log submission (wire in Resend / SendGrid / Slack webhook here) ──
  console.log('[autowire] New contact submission', {
    name,
    email,
    company: company || '—',
    budget,
    painPoints,
    receivedAt: new Date().toISOString(),
  });

  // TODO: await emailService.notify({ name, email, company, budget, painPoints });

  return res.status(200).json({
    message: "Received. We'll be in touch within 24 hours.",
  });
}
