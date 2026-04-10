'use client'

import { useState } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
interface Rating {
  [key: string]: number
}

interface FormData {
  // Infos testeur
  pseudo: string
  businessType: string
  device: string
  currentTool: string

  // Questions ouvertes par section
  s1_inscription: string
  s1_dashboard: string
  s2_formulaire: string
  s2_canal: string
  s2_filtres: string
  s3_fiche: string
  s3_recherche: string
  s3_whatsapp: string
  s4_facture_pdf: string
  s4_facture_process: string
  s4_devis: string
  s5_reponse: string
  s5_intention: string
  s5_ton: string
  s5_suggestions: string
  s6_kpis: string
  s6_insight: string
  global_aime: string
  global_decu: string
  global_manque: string
  global_utilisation: string
  global_explication: string
  global_remarques: string

  // Ratings
  ratings: Rating

  // NPS
  nps: number | null

  // Usage
  usage: string
}

const INITIAL: FormData = {
  pseudo: '', businessType: '', device: '', currentTool: '',
  s1_inscription: '', s1_dashboard: '',
  s2_formulaire: '', s2_canal: '', s2_filtres: '',
  s3_fiche: '', s3_recherche: '', s3_whatsapp: '',
  s4_facture_pdf: '', s4_facture_process: '', s4_devis: '',
  s5_reponse: '', s5_intention: '', s5_ton: '', s5_suggestions: '',
  s6_kpis: '', s6_insight: '',
  global_aime: '', global_decu: '', global_manque: '',
  global_utilisation: '', global_explication: '', global_remarques: '',
  ratings: {}, nps: null, usage: '',
}

// ── Composants atomiques ──────────────────────────────────────────────────────
function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
          {number}
        </span>
        <h2 className="font-serif text-2xl text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-zinc-400 text-sm ml-[calc(1rem+12px+0.75rem)] font-light">{subtitle}</p>}
      <div className="mt-4 h-px bg-linear-to-r from-amber-400/40 via-amber-400/10 to-transparent" />
    </div>
  )
}

function ScenarioBox({ num, title, steps, accent = false }: {
  num: string; title: string; steps: string[]; accent?: boolean
}) {
  return (
    <div className={`rounded-lg border p-5 mb-6 ${accent
      ? 'border-amber-400/30 bg-amber-400/5'
      : 'border-zinc-700/60 bg-zinc-900/40'}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
          {num}
        </span>
        <span className="font-medium text-white text-sm">{title}</span>
      </div>
      <ol className="space-y-1.5">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-zinc-400">
            <span className="text-amber-400/60 font-mono shrink-0 w-4">{i + 1}.</span>
            <span dangerouslySetInnerHTML={{ __html: s }} />
          </li>
        ))}
      </ol>
    </div>
  )
}

function Textarea({ label, field, form, setForm, placeholder, rows = 3 }: {
  label: string; field: keyof FormData; form: FormData
  setForm: (f: FormData) => void; placeholder?: string; rows?: number
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-zinc-300 mb-2 font-medium">{label}</label>
      <textarea
        rows={rows}
        value={form[field] as string}
        onChange={e => setForm({ ...form, [field]: e.target.value })}
        placeholder={placeholder || 'Ta réponse…'}
        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 resize-none transition-colors"
      />
    </div>
  )
}

function RadioGroup({ label, field, options, form, setForm }: {
  label: string; field: keyof FormData; options: { value: string; label: string }[]
  form: FormData; setForm: (f: FormData) => void
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-zinc-300 mb-3 font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setForm({ ...form, [field]: opt.value })}
            className={`px-4 py-2 rounded-lg text-sm border transition-all ${
              form[field] === opt.value
                ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function RatingTable({ criteria, form, setForm }: {
  criteria: { key: string; label: string }[]
  form: FormData; setForm: (f: FormData) => void
}) {
  return (
    <div className="mb-6 rounded-lg border border-zinc-800 overflow-hidden">
      <div className="grid grid-cols-[1fr_auto] bg-zinc-900/80 border-b border-zinc-800 px-4 py-2.5">
        <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Critère</span>
        <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Note (1→5)</span>
      </div>
      {criteria.map(({ key, label }) => (
        <div key={key} className="grid grid-cols-[1fr_auto] items-center px-4 py-3 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/30 transition-colors">
          <span className="text-sm text-zinc-300">{label}</span>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => setForm({ ...form, ratings: { ...form.ratings, [key]: n } })}
                className={`w-8 h-8 rounded-md text-sm font-mono transition-all border ${
                  form.ratings[key] === n
                    ? 'bg-amber-400 border-amber-400 text-black font-bold'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-500'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function InfoBox({ text, variant = 'blue' }: { text: string; variant?: 'blue' | 'amber' }) {
  const styles = variant === 'amber'
    ? 'border-amber-400/30 bg-amber-400/5 text-amber-200'
    : 'border-blue-500/30 bg-blue-500/5 text-blue-200'
  return (
    <div className={`rounded-lg border-l-4 px-4 py-3 mb-5 text-sm ${styles}`}>
      {text}
    </div>
  )
}

function NpsSelector({ form, setForm }: { form: FormData; setForm: (f: FormData) => void }) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-zinc-300 mb-1 font-medium">
        Recommanderais-tu cet outil à un(e) ami(e) entrepreneur(e) ?
      </label>
      <p className="text-xs text-zinc-500 mb-3">0 = jamais · 10 = certainement</p>
      <div className="flex flex-wrap gap-2">
        {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => setForm({ ...form, nps: n })}
            className={`w-10 h-10 rounded-lg text-sm font-mono border transition-all ${
              form.nps === n
                ? n >= 9 ? 'bg-green-500 border-green-500 text-white font-bold'
                : n >= 7 ? 'bg-amber-400 border-amber-400 text-black font-bold'
                : 'bg-red-500 border-red-500 text-white font-bold'
                : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Page principale ───────────────────────────────────────────────────────────
export default function BetaTestPage() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [step, setStep] = useState(0)   // 0 = intro, 1-7 = sections, 8 = merci
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const STEPS = 8 // sections 1 à 7 + éval globale

  async function handleSubmit() {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/beta-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStep(STEPS + 1)
    } catch {
      setError('Une erreur est survenue. Réessaie dans un instant.')
    } finally {
      setSubmitting(false)
    }
  }

  const progress = step === 0 ? 0 : Math.round((step / STEPS) * 100)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-widest text-amber-400 uppercase mb-3">
            mustafah.dev · Bêta test
          </p>
          <h1 className="font-serif text-4xl text-white mb-3">
            Micro-Business Assistant
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Ton retour va directement façonner le produit. 45 à 60 minutes, 7 sections.
          </p>
        </div>

        {/* Progress bar */}
        {step > 0 && step <= STEPS && (
          <div className="mb-10">
            <div className="flex justify-between text-xs text-zinc-500 mb-2 font-mono">
              <span>Section {step}/{STEPS}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-0.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* ── INTRO ── */}
        {step === 0 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
              <h2 className="font-serif text-xl text-white">Avant de commencer</h2>
              <div className="space-y-2 text-sm text-zinc-400">
                {[
                  "Utilise l'application comme si c'était ton outil quotidien.",
                  "Note tout ce qui te semble lent, confus, cassé ou manquant.",
                  "Tes impressions spontanées valent plus que des rapports parfaits.",
                  "Utilise sur mobile ET desktop si possible.",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-amber-400 mt-0.5">·</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs text-zinc-500">
              {[['🕐', '45–60 min'], ['📋', '7 sections'], ['🎯', '100% anonyme']].map(([e, t]) => (
                <div key={t} className="rounded-lg border border-zinc-800 bg-zinc-900/30 py-3">
                  <div className="text-lg mb-1">{e}</div>
                  <div>{t}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors"
            >
              Commencer le test →
            </button>
          </div>
        )}

        {/* ── SECTION 1 — INSCRIPTION ── */}
        {step === 1 && (
          <div>
            <SectionTitle number="01" title="Inscription & Premier accès" />

            <div className="mb-6 rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-medium text-zinc-300 mb-4">Infos sur toi</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Prénom / Pseudo', field: 'pseudo' as const, placeholder: 'Aminata' },
                  { label: 'Type de business', field: 'businessType' as const, placeholder: 'Couture, restauration…' },
                ].map(({ label, field, placeholder }) => (
                  <div key={field}>
                    <label className="block text-xs text-zinc-500 mb-1.5 font-mono uppercase tracking-wider">{label}</label>
                    <input
                      type="text"
                      value={form[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <RadioGroup label="Appareil utilisé" field="device" form={form} setForm={setForm}
                  options={[{ value: 'mobile', label: '📱 Mobile' }, { value: 'desktop', label: '💻 Desktop' }, { value: 'both', label: '📱💻 Les deux' }]} />
                <RadioGroup label="Outil de gestion actuel" field="currentTool" form={form} setForm={setForm}
                  options={[
                    { value: 'cahier', label: 'Cahier/Excel' },
                    { value: 'whatsapp', label: 'WhatsApp' },
                    { value: 'saas', label: 'Autre SaaS' },
                    { value: 'nothing', label: 'Rien' },
                  ]} />
              </div>
            </div>

            <ScenarioBox num="1.1" title="Créer un compte" steps={[
              "Clique sur « S'inscrire »",
              "Remplis le formulaire avec ton vrai type de business",
              "Accède au tableau de bord",
            ]} />

            <Textarea label="L'inscription a-t-elle été claire ? Qu'est-ce qui t'a bloqué ou surpris ?" field="s1_inscription" form={form} setForm={setForm} />
            <Textarea label="Le tableau de bord à l'arrivée — qu'est-ce que tu as remarqué en premier ?" field="s1_dashboard" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'inscription', label: "Facilité d'inscription" },
              { key: 'champs', label: "Clarté des champs du formulaire" },
              { key: 'dashboard_first', label: "Première impression du dashboard" },
            ]} />
          </div>
        )}

        {/* ── SECTION 2 — VENTES ── */}
        {step === 2 && (
          <div>
            <SectionTitle number="02" title="Gestion des ventes" />

            <ScenarioBox num="2.1" title="Enregistrer une vente" steps={[
              "Va dans « Ventes » → « + Nouvelle vente »",
              "Remplis le formulaire avec un produit réel ou fictif",
              "Enregistre et vérifie que la vente apparaît dans la liste",
            ]} />
            <Textarea label="Le formulaire de vente est-il adapté à ton activité ? Qu'est-ce qui manque ?" field="s2_formulaire" form={form} setForm={setForm} />
            <Textarea label="Le champ « Canal » (WhatsApp, Instagram…) est-il pertinent pour toi ?" field="s2_canal" form={form} setForm={setForm} />

            <ScenarioBox num="2.2" title="Filtrer et retrouver une vente" steps={[
              "Filtre par date pour voir les ventes de cette semaine",
              "Filtre par statut « payé »",
              "Vérifie le total affiché",
            ]} />
            <Textarea label="Les filtres répondent-ils à tes besoins ? Qu'est-ce que tu voudrais filtrer en plus ?" field="s2_filtres" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'vente_rapidite', label: "Rapidité d'enregistrement d'une vente" },
              { key: 'vente_champs', label: "Pertinence des champs du formulaire" },
              { key: 'vente_liste', label: "Clarté de la liste des ventes" },
              { key: 'vente_filtres', label: "Utilité des filtres" },
            ]} />
          </div>
        )}

        {/* ── SECTION 3 — CLIENTS ── */}
        {step === 3 && (
          <div>
            <SectionTitle number="03" title="Gestion des clients" />

            <ScenarioBox num="3.1" title="Ajouter et retrouver un client" steps={[
              "Va dans « Clients » → « + Nouveau client »",
              "Ajoute un client avec nom, téléphone et notes",
              "Utilise la barre de recherche pour le retrouver",
              "Ouvre sa fiche détail",
            ]} />
            <Textarea label="La fiche client contient-elle les informations dont tu as besoin ? Qu'est-ce qui manque ?" field="s3_fiche" form={form} setForm={setForm} />
            <Textarea label="La recherche fonctionne-t-elle comme tu t'y attendais ?" field="s3_recherche" form={form} setForm={setForm} />

            <ScenarioBox num="3.2" title="Relancer un client via WhatsApp IA" accent steps={[
              "Sur la carte d'un client, clique sur l'icône WhatsApp verte",
              "Génère le message de relance",
              "Évalue si le message est utilisable tel quel",
            ]} />
            <Textarea label="Le message généré est-il naturel ? Enverais-tu ce message à un vrai client ?" field="s3_whatsapp" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'client_ajout', label: "Facilité d'ajout d'un client" },
              { key: 'client_fiche', label: "Utilité de la fiche détail" },
              { key: 'client_whatsapp', label: "Qualité du message WhatsApp généré" },
            ]} />
          </div>
        )}

        {/* ── SECTION 4 — FACTURES & DEVIS ── */}
        {step === 4 && (
          <div>
            <SectionTitle number="04" title="Factures & Devis" />

            <ScenarioBox num="4.1" title="Créer une facture et générer le PDF" steps={[
              "Va dans « Factures » → « + Nouvelle facture »",
              "Ajoute 2 ou 3 articles avec des prix",
              "Génère le PDF et ouvre-le",
              "Marque la facture comme payée",
            ]} />
            <Textarea label="Le PDF généré est-il professionnel ? Enverais-tu cette facture à un client ?" field="s4_facture_pdf" form={form} setForm={setForm} />
            <Textarea label="Le processus de création est-il fluide ? Où as-tu buté ?" field="s4_facture_process" form={form} setForm={setForm} />

            <ScenarioBox num="4.2" title="Convertir un devis en facture" steps={[
              "Va dans « Devis » → « + Nouveau devis »",
              "Crée un devis pour un service",
              "Clique sur « Facturer » pour le convertir",
            ]} />
            <Textarea label="Le passage devis → facture est-il intuitif ? Tu l'utiliserais dans ta vraie activité ?" field="s4_devis" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'facture_creation', label: "Facilité de création d'une facture" },
              { key: 'facture_pdf', label: "Qualité du PDF généré" },
              { key: 'devis_creation', label: "Facilité de création d'un devis" },
              { key: 'devis_conversion', label: "Fluidité de la conversion devis → facture" },
            ]} />
          </div>
        )}

        {/* ── SECTION 5 — ASSISTANT IA ── */}
        {step === 5 && (
          <div>
            <SectionTitle number="05" title="Assistant IA WhatsApp"
              subtitle="Section au cœur du produit — prends le temps de bien l'évaluer." />

            <InfoBox variant="amber" text='💡  Cette section est la plus importante. Tes retours ici ont le plus d&apos;impact.' />

            <ScenarioBox num="5.1" title="Répondre à un message client" accent steps={[
              "Va dans « Assistant IA » → onglet « Générateur WhatsApp »",
              "Mode « Répondre à un message » — colle ce texte :",
              "<em class='text-amber-300'>\"Bonjour, est-ce que vous faites des livraisons à Thiès ? Et c'est combien pour la commande minimum ?\"</em>",
              "Génère la réponse et évalue-la",
              "Essaie avec un de tes vrais messages clients si possible",
            ]} />
            <Textarea label="La réponse générée est-elle naturelle ? Tu l'enverrais telle quelle ou tu la modifierais ?" field="s5_reponse" form={form} setForm={setForm} />
            <Textarea label="L'IA a-t-elle bien détecté l'intention du message client ?" field="s5_intention" form={form} setForm={setForm} />

            <ScenarioBox num="5.2" title="Créer un message de relance" steps={[
              "Mode « Créer un message »",
              "Sélectionne : Client à relancer / Relance paiement / Ton Amical",
              "Génère, puis compare avec le ton Urgent",
            ]} />
            <Textarea label="La différence de ton entre « Amical » et « Urgent » est-elle perceptible et utile ?" field="s5_ton" form={form} setForm={setForm} />
            <Textarea label="Quelle situation ou quel type de message tu aimerais ajouter ?" field="s5_suggestions" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'ia_qualite', label: "Qualité des réponses générées" },
              { key: 'ia_contexte', label: "Pertinence contextuelle (adapté à l'Afrique)" },
              { key: 'ia_ton', label: "Utilité du sélecteur de ton" },
              { key: 'ia_vitesse', label: "Rapidité de génération" },
            ]} />
          </div>
        )}

        {/* ── SECTION 6 — DASHBOARD ── */}
        {step === 6 && (
          <div>
            <SectionTitle number="06" title="Tableau de bord" />

            <ScenarioBox num="6.1" title="Explorer le dashboard" steps={[
              "Observe les KPIs, le graphique, les tops clients/produits",
              "Définis un objectif mensuel",
              "Génère l'insight IA du jour",
            ]} />
            <Textarea label="Les informations affichées sont-elles utiles ? Qu'est-ce qui est superflu ? Qu'est-ce qui manque ?" field="s6_kpis" form={form} setForm={setForm} />
            <Textarea label="L'insight IA est-il pertinent et actionnable ?" field="s6_insight" form={form} setForm={setForm} />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'dash_kpis', label: "Clarté des KPIs" },
              { key: 'dash_objectif', label: "Utilité de l'objectif mensuel" },
              { key: 'dash_insight', label: "Qualité de l'insight IA" },
              { key: 'dash_vue', label: "Vue d'ensemble de l'activité" },
            ]} />
          </div>
        )}

        {/* ── SECTION 7 — ÉVALUATION GLOBALE ── */}
        {step === 7 && (
          <div>
            <SectionTitle number="07" title="Évaluation globale" />

            <RatingTable form={form} setForm={setForm} criteria={[
              { key: 'global_ux', label: "Facilité d'utilisation générale" },
              { key: 'global_design', label: "Design & interface" },
              { key: 'global_perf', label: "Rapidité & performance" },
              { key: 'global_pertinence', label: "Pertinence pour mon activité" },
              { key: 'global_note', label: "Note globale du produit" },
            ]} />

            <Textarea label="La fonctionnalité que tu as le plus aimée ?" field="global_aime" form={form} setForm={setForm} />
            <Textarea label="La fonctionnalité qui t'a le plus déçu ou frustré ?" field="global_decu" form={form} setForm={setForm} />
            <Textarea label="Une feature qui manque et que tu utiliserais au quotidien ?" field="global_manque" form={form} setForm={setForm} />

            <div className="mb-5">
              <RadioGroup label="Utiliserais-tu cet outil pour ton activité ?" field="usage" form={form} setForm={setForm}
                options={[
                  { value: 'yes_now', label: '✅ Oui, dès maintenant' },
                  { value: 'yes_later', label: '⏳ Oui, quand X sera amélioré' },
                  { value: 'no', label: '❌ Non' },
                ]} />
              {(form.usage === 'yes_later' || form.usage === 'no') && (
                <Textarea label="Explique :" field="global_explication" form={form} setForm={setForm} />
              )}
            </div>

            <NpsSelector form={form} setForm={setForm} />
            <Textarea label="Autres remarques libres — tout ce que tu veux nous dire :" field="global_remarques" form={form} setForm={setForm} rows={4} />

            {error && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}
          </div>
        )}

        {/* ── MERCI ── */}
        {step === STEPS + 1 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-6">🙏</div>
            <h2 className="font-serif text-3xl text-white mb-4">Merci pour ton retour.</h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto">
              Chaque réponse est lue attentivement. Tu viens de contribuer à façonner un outil pour des milliers d&apos;entrepreneurs.
            </p>
            <div className="mt-8">
              <a
                href="https://mustafah.dev"
                className="inline-block px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500 transition-colors"
              >
                ← Retour au portfolio
              </a>
            </div>
          </div>
        )}

        {/* ── NAVIGATION ── */}
        {step > 0 && step <= STEPS && (
          <div className="flex gap-3 mt-8 pt-6 border-t border-zinc-800">
            <button
              onClick={() => setStep(s => s - 1)}
              className="px-5 py-3 rounded-xl border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-500 transition-colors"
            >
              ← Retour
            </button>

            {step < STEPS ? (
              <button
                onClick={() => setStep(s => s + 1)}
                className="flex-1 py-3 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors"
              >
                Section suivante →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 py-3 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Envoi en cours…' : 'Envoyer mes réponses ✓'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}