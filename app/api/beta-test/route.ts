import { NextRequest, NextResponse } from 'next/server'

// ── Config ────────────────────────────────────────────────────────────────────
// Variables d'environnement requises :
//   RESEND_API_KEY      → clé API Resend (resend.com)
//   NOTIFY_EMAIL        → email où recevoir les notifications (ex: hello@mustafah.dev)
//   NOTION_API_KEY      → clé d'intégration Notion
//   NOTION_DATABASE_ID  → ID de la base de données Notion

const RESEND_API_KEY = process.env.RESEND_API_KEY!
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL!
const NOTION_API_KEY = process.env.NOTION_API_KEY!
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!

// ── Types ─────────────────────────────────────────────────────────────────────
interface BetaTestData {
    pseudo?: string
    businessType?: string
    device?: string
    currentTool?: string
    ratings?: Record<string, number>
    nps?: number | null
    usage?: string
    global_aime?: string
    global_decu?: string
    global_manque?: string
    global_remarques?: string
    global_explication?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function ratingAvg(ratings: Record<string, number>, keys: string[]): string {
    const vals = keys.map(k => ratings[k]).filter(Boolean)
    if (!vals.length) return 'N/A'
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1)
}

function row(label: string, value: string | number | null): string {
    if (!value && value !== 0) return ''
    return `
    <tr>
      <td style="padding:8px 12px;color:#9ca3af;font-size:13px;white-space:nowrap;border-bottom:1px solid #27272a">${label}</td>
      <td style="padding:8px 12px;color:#e4e4e7;font-size:13px;border-bottom:1px solid #27272a">${value}</td>
    </tr>`
}

function section(title: string, content: string): string {
    return `
    <div style="margin-bottom:24px">
      <h3 style="margin:0 0 12px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#f59e0b">${title}</h3>
      <table style="width:100%;border-collapse:collapse;background:#18181b;border-radius:8px;overflow:hidden">
        ${content}
      </table>
    </div>`
}

function qa(q: string, a: string): string {
    if (!a) return ''
    return `
    <div style="margin-bottom:12px">
      <p style="margin:0 0 4px;font-size:12px;color:#9ca3af">${q}</p>
      <p style="margin:0;font-size:14px;color:#e4e4e7;line-height:1.5;background:#18181b;border-radius:6px;padding:10px 12px">${a}</p>
    </div>`
}

// ── Envoyer email via Resend ──────────────────────────────────────────────────
async function sendEmail(data: BetaTestData) {
    const ratings = data.ratings ?? {}

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<div style="max-width:600px;margin:0 auto;padding:40px 20px">

  <div style="margin-bottom:32px">
    <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#f59e0b">mustafah.dev · Bêta test</p>
    <h1 style="margin:0;font-size:24px;color:#fafafa">Nouveau retour bêta</h1>
    <p style="margin:8px 0 0;font-size:13px;color:#71717a">${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
  </div>

  ${section('Testeur', `
    ${row('Pseudo', data.pseudo ?? 'Anonyme')}
    ${row('Business', data.businessType ?? null)}
    ${row('Appareil', data.device ?? null)}
    ${row('Outil actuel', data.currentTool ?? null)}
  `)}

  ${section('Scores moyens par section', `
    ${row('Section 1 — Inscription', ratingAvg(ratings, ['inscription', 'champs', 'dashboard_first']))}
    ${row('Section 2 — Ventes', ratingAvg(ratings, ['vente_rapidite', 'vente_champs', 'vente_liste', 'vente_filtres']))}
    ${row('Section 3 — Clients', ratingAvg(ratings, ['client_ajout', 'client_fiche', 'client_whatsapp']))}
    ${row('Section 4 — Factures/Devis', ratingAvg(ratings, ['facture_creation', 'facture_pdf', 'devis_creation', 'devis_conversion']))}
    ${row('Section 5 — Assistant IA', ratingAvg(ratings, ['ia_qualite', 'ia_contexte', 'ia_ton', 'ia_vitesse']))}
    ${row('Section 6 — Dashboard', ratingAvg(ratings, ['dash_kpis', 'dash_objectif', 'dash_insight', 'dash_vue']))}
    ${row('Note globale', ratings.global_note ?? 'N/A')}
    ${row('NPS', data.nps != null ? `${data.nps}/10` : 'N/A')}
    ${row('Utilisation', data.usage ?? null)}
  `)}

  <div style="margin-bottom:24px">
    <h3 style="margin:0 0 12px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#f59e0b">Réponses qualitatives</h3>
    ${qa('Feature la plus aimée', data.global_aime ?? '')}
    ${qa('Feature la plus décevante', data.global_decu ?? '')}
    ${qa('Feature manquante', data.global_manque ?? '')}
    ${qa('Remarques libres', data.global_remarques ?? '')}
    ${data.global_explication ? qa('Explication usage', data.global_explication) : ''}
  </div>

  <p style="font-size:11px;color:#3f3f46;text-align:center;margin-top:32px;padding-top:16px;border-top:1px solid #27272a">
    mustafah.dev · beta-test
  </p>
</div>
</body>
</html>`

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: 'hello@mustafah.dev',
            to: NOTIFY_EMAIL,
            subject: `🧪 Nouveau bêta testeur — ${data.pseudo ?? 'Anonyme'} · NPS ${data.nps ?? '?'}/10`,
            html,
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        console.error('Resend error:', err)
        throw new Error('Email failed')
    }
}

// ── Sauvegarder dans Notion ───────────────────────────────────────────────────
async function saveToNotion(data: BetaTestData) {
    const ratings = data.ratings ?? {}

    // Construction des propriétés Notion
    // La base de données doit avoir ces champs (les créer en avance ou les laisser créer auto)
    const properties: Record<string, unknown> = {
        'Pseudo': { title: [{ text: { content: data.pseudo ?? 'Anonyme' } }] },
        'Business': { rich_text: [{ text: { content: data.businessType ?? '' } }] },
        'Appareil': { select: { name: data.device ?? 'Non précisé' } },
        'Outil actuel': { select: { name: data.currentTool ?? 'Non précisé' } },
        'NPS': data.nps != null ? { number: data.nps } : { number: null },
        'Note globale': ratings.global_note ? { number: ratings.global_note } : { number: null },
        'Utilisation': data.usage ? { select: { name: data.usage } } : undefined,
        'Feature aimée': { rich_text: [{ text: { content: (data.global_aime ?? '').slice(0, 2000) } }] },
        'Feature décevante': { rich_text: [{ text: { content: (data.global_decu ?? '').slice(0, 2000) } }] },
        'Feature manquante': { rich_text: [{ text: { content: (data.global_manque ?? '').slice(0, 2000) } }] },
        'Remarques': { rich_text: [{ text: { content: (data.global_remarques ?? '').slice(0, 2000) } }] },
        'Score Inscription': { number: Number(ratingAvg(ratings, ['inscription', 'champs', 'dashboard_first'])) || null },
        'Score Ventes': { number: Number(ratingAvg(ratings, ['vente_rapidite', 'vente_champs', 'vente_liste', 'vente_filtres'])) || null },
        'Score Clients': { number: Number(ratingAvg(ratings, ['client_ajout', 'client_fiche', 'client_whatsapp'])) || null },
        'Score Factures': { number: Number(ratingAvg(ratings, ['facture_creation', 'facture_pdf', 'devis_creation', 'devis_conversion'])) || null },
        'Score IA': { number: Number(ratingAvg(ratings, ['ia_qualite', 'ia_contexte', 'ia_ton', 'ia_vitesse'])) || null },
        'Score Dashboard': { number: Number(ratingAvg(ratings, ['dash_kpis', 'dash_objectif', 'dash_insight', 'dash_vue'])) || null },
        'Date': { date: { start: new Date().toISOString() } },
    }

    // Nettoie les undefined
    const cleanProps = Object.fromEntries(
        Object.entries(properties).filter(([, v]) => v !== undefined)
    )

    const res = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
            parent: { database_id: NOTION_DATABASE_ID },
            properties: cleanProps,
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        console.error('Notion error:', err)
        throw new Error('Notion failed')
    }
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    try {
        const data = await req.json() as BetaTestData

        // Email + Notion en parallèle
        const results = await Promise.allSettled([
            sendEmail(data),
            saveToNotion(data),
        ])

        const emailOk = results[0].status === 'fulfilled'
        const notionOk = results[1].status === 'fulfilled'

        if (!emailOk) console.error('Email failed:', (results[0] as PromiseRejectedResult).reason)
        if (!notionOk) console.error('Notion failed:', (results[1] as PromiseRejectedResult).reason)

        // On retourne 200 même si l'un échoue — au moins une destination a reçu les données
        if (!emailOk && !notionOk) {
            return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
        }

        return NextResponse.json({ ok: true, email: emailOk, notion: notionOk })

    } catch (err) {
        console.error('Beta test API error:', err)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}