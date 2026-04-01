'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/* ── Types ── */
type Tab = 'dashboard' | 'hero' | 'about' | 'services' | 'portfolio' | 'albums' | 'testimonials' | 'messages';

interface AdminRecord {
  id?: string;
  [key: string]: unknown;
}

/* ── API helpers ── */
async function apiGet(table: string) {
  const res = await fetch(`/api/admin/data?table=${table}`);
  if (!res.ok) throw new Error('Failed to fetch');
  const json = await res.json();
  return json.data ?? [];
}

async function apiPost(table: string, record: AdminRecord) {
  const res = await fetch('/api/admin/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table, record }),
  });
  if (!res.ok) throw new Error('Failed to create');
  return (await res.json()).data;
}

async function apiPut(table: string, id: string, record: AdminRecord) {
  const res = await fetch('/api/admin/data', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table, id, record }),
  });
  if (!res.ok) throw new Error('Failed to update');
  return (await res.json()).data;
}

async function apiDelete(table: string, id: string) {
  const res = await fetch('/api/admin/data', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table, id }),
  });
  if (!res.ok) throw new Error('Failed to delete');
}

/* ── Shared Components ── */
function Field({ label, value, onChange, type = 'text', rows }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; rows?: number;
}) {
  const id = label.toLowerCase().replace(/\s/g, '_');
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[11px] uppercase tracking-wider text-white/40 mb-1.5">{label}</label>
      {rows ? (
        <textarea id={id} rows={rows} value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-red-500 transition-colors" />
      ) : (
        <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-red-500 transition-colors" />
      )}
    </div>
  );
}

function Btn({ children, onClick, variant = 'primary', disabled, className = '' }: {
  children: React.ReactNode; onClick?: () => void; variant?: 'primary' | 'danger' | 'ghost'; disabled?: boolean; className?: string;
}) {
  const base = 'px-4 py-2 text-xs font-medium uppercase tracking-wider rounded transition-all disabled:opacity-40';
  const styles = {
    primary: 'bg-red-600 hover:bg-red-500 text-white',
    danger: 'bg-transparent border border-red-600/40 hover:bg-red-600/20 text-red-400',
    ghost: 'bg-white/5 hover:bg-white/10 text-white/60',
  };
  return <button onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded text-sm font-medium animate-fade-up ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
      {message}
    </div>
  );
}

/* ══════════════════════════════════════
   ADMIN PAGE
   ══════════════════════════════════════ */
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [tab, setTab] = useState<Tab>('dashboard');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Check if already logged in
  useEffect(() => {
    fetch('/api/admin/data?table=site_settings')
      .then((r) => { if (r.ok) setAuthed(true); })
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  const login = async () => {
    setLoginError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthed(true);
    } else {
      setLoginError('Invalid password');
    }
  };

  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthed(false);
    setPassword('');
  };

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center text-white/40 text-sm">Loading...</div>;
  }

  /* ── Login Screen ── */
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-8 bg-white/[0.03] border border-white/10 rounded-lg">
          <div className="text-center mb-8">
            <div className="text-brand-red font-semibold text-lg tracking-wide mb-1">PROEDGE</div>
            <div className="text-white/30 text-xs uppercase tracking-widest">Admin Panel</div>
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && login()}
              placeholder="Enter admin password"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white outline-none focus:border-red-500 transition-colors placeholder:text-white/20"
            />
          </div>
          {loginError && <p className="text-red-400 text-xs mb-3">{loginError}</p>}
          <Btn onClick={login} className="w-full py-3">Sign In</Btn>
        </div>
      </div>
    );
  }

  /* ── Tabs ── */
  const TABS: { key: Tab; label: string; icon: string }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '◉' },
    { key: 'hero', label: 'Hero Slides', icon: '◎' },
    { key: 'about', label: 'About', icon: '◈' },
    { key: 'services', label: 'Services', icon: '◆' },
    { key: 'portfolio', label: 'Portfolio', icon: '▣' },
    { key: 'albums', label: 'Albums', icon: '▤' },
    { key: 'testimonials', label: 'Testimonials', icon: '❝' },
    { key: 'messages', label: 'Messages', icon: '✉' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-black/50 border-r border-white/5 p-4 flex flex-col">
        <div className="mb-8">
          <div className="text-brand-red font-semibold text-sm tracking-wide">PROEDGE</div>
          <div className="text-white/20 text-[10px] uppercase tracking-widest">Admin</div>
        </div>
        <nav className="flex-1 space-y-1">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-all flex items-center gap-2.5 ${
                tab === t.key ? 'bg-red-600/20 text-red-400' : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              <span className="text-xs">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-white/5 pt-4 mt-4 space-y-2">
          <a href="/" target="_blank" className="block text-xs text-white/30 hover:text-white/60 transition-colors">← View Site</a>
          <button onClick={logout} className="text-xs text-red-400/60 hover:text-red-400 transition-colors">Sign Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-5xl">
          {tab === 'dashboard' && <DashboardTab />}
          {tab === 'hero' && <HeroTab showToast={showToast} />}
          {tab === 'about' && <AboutTab showToast={showToast} />}
          {tab === 'services' && <ServicesTab showToast={showToast} />}
          {tab === 'portfolio' && <PortfolioTab showToast={showToast} />}
          {tab === 'albums' && <AlbumsTab showToast={showToast} />}
          {tab === 'testimonials' && <TestimonialsTab showToast={showToast} />}
          {tab === 'messages' && <MessagesTab />}
        </div>
      </main>

      {toast && <Toast {...toast} />}
    </div>
  );
}

/* ══════════════════════════════════════
   TAB COMPONENTS
   ══════════════════════════════════════ */

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      {subtitle && <p className="text-white/30 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}

/* ── Dashboard ── */
function DashboardTab() {
  const [stats, setStats] = useState<Record<string, number>>({});

  useEffect(() => {
    const tables = ['hero_slides', 'services', 'portfolio_images', 'albums', 'testimonials', 'contact_submissions'];
    Promise.all(tables.map(async (t) => {
      try { const d = await apiGet(t); return [t, d.length]; }
      catch { return [t, 0]; }
    })).then((results) => setStats(Object.fromEntries(results)));
  }, []);

  const cards = [
    { label: 'Hero Slides', key: 'hero_slides', color: 'bg-red-600/20 text-red-400' },
    { label: 'Services', key: 'services', color: 'bg-amber-600/20 text-amber-400' },
    { label: 'Portfolio Images', key: 'portfolio_images', color: 'bg-blue-600/20 text-blue-400' },
    { label: 'Albums', key: 'albums', color: 'bg-purple-600/20 text-purple-400' },
    { label: 'Testimonials', key: 'testimonials', color: 'bg-green-600/20 text-green-400' },
    { label: 'Messages', key: 'contact_submissions', color: 'bg-cyan-600/20 text-cyan-400' },
  ];

  return (
    <>
      <SectionHeader title="Dashboard" subtitle="Overview of your website content" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.key} className={`p-5 rounded-lg border border-white/5 ${c.color.split(' ')[0]}`}>
            <div className={`text-3xl font-bold ${c.color.split(' ')[1]}`}>{stats[c.key] ?? '—'}</div>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{c.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-5 bg-white/[0.02] border border-white/5 rounded-lg">
        <h3 className="text-sm font-medium text-white/60 mb-2">Quick Setup</h3>
        <ol className="text-white/40 text-sm space-y-2 list-decimal list-inside">
          <li>Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">supabase.com</a></li>
          <li>Run the SQL migration from <code className="text-white/60 bg-white/5 px-1 rounded">supabase/migration.sql</code> in the SQL Editor</li>
          <li>Copy your project URL and keys into <code className="text-white/60 bg-white/5 px-1 rounded">.env.local</code></li>
          <li>Set an <code className="text-white/60 bg-white/5 px-1 rounded">ADMIN_PASSWORD</code> in your env</li>
          <li>Restart the dev server</li>
        </ol>
      </div>
    </>
  );
}

/* ── Hero Slides ── */
function HeroTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [slides, setSlides] = useState<AdminRecord[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try { setSlides(await apiGet('hero_slides')); } catch { showToast('Failed to load slides', 'error'); }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const add = async () => {
    if (!newUrl.trim()) return;
    try {
      await apiPost('hero_slides', { image_url: newUrl, sort_order: slides.length });
      setNewUrl('');
      showToast('Slide added');
      load();
    } catch { showToast('Failed to add slide', 'error'); }
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this slide?')) return;
    try { await apiDelete('hero_slides', id); showToast('Slide deleted'); load(); }
    catch { showToast('Failed to delete', 'error'); }
  };

  return (
    <>
      <SectionHeader title="Hero Slides" subtitle="Manage the homepage slideshow images" />
      {loading ? <p className="text-white/30 text-sm">Loading...</p> : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {slides.map((s) => (
              <div key={s.id as string} className="relative group aspect-[4/3] bg-white/5 rounded overflow-hidden">
                <Image src={s.image_url as string} alt="" fill className="object-cover" sizes="200px" />
                <button onClick={() => remove(s.id as string)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-600 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">×</button>
                <div className="absolute bottom-1 left-2 text-[10px] text-white/40">#{(s.sort_order as number) + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="Image URL"
              className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-red-500" />
            <Btn onClick={add}>Add Slide</Btn>
          </div>
        </>
      )}
    </>
  );
}

/* ── About ── */
function AboutTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet('site_settings').then((data: AdminRecord[]) => {
      const map: Record<string, string> = {};
      data.forEach((r) => { map[r.key as string] = r.value as string; });
      setSettings(map);
    }).catch(() => showToast('Failed to load', 'error')).finally(() => setLoading(false));
  }, [showToast]);

  const save = async (key: string) => {
    try {
      await apiPut('site_settings', key, { value: settings[key] });
      showToast(`${key} updated`);
    } catch { showToast('Failed to save', 'error'); }
  };

  const update = (key: string, value: string) => setSettings((s) => ({ ...s, [key]: value }));

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  const aboutKeys = ['about_paragraph_1', 'about_paragraph_2', 'about_paragraph_3', 'about_paragraph_4', 'about_image'];

  return (
    <>
      <SectionHeader title="About Section" subtitle="Edit the about text and image on the homepage" />
      <div className="space-y-4">
        {aboutKeys.map((key) => (
          <div key={key}>
            <Field
              label={key.replace(/_/g, ' ')}
              value={settings[key] ?? ''}
              onChange={(v) => update(key, v)}
              rows={key.includes('paragraph') ? 3 : undefined}
            />
            <Btn onClick={() => save(key)} variant="ghost" className="mt-1">Save</Btn>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Services ── */
function ServicesTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [services, setServices] = useState<AdminRecord[]>([]);
  const [editing, setEditing] = useState<AdminRecord | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try { setServices(await apiGet('services')); } catch { showToast('Failed to load', 'error'); }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const saveService = async () => {
    if (!editing) return;
    try {
      if (editing.id) {
        const { id, created_at, ...record } = editing;
        await apiPut('services', id as string, record);
        showToast('Service updated');
      } else {
        await apiPost('services', editing);
        showToast('Service created');
      }
      setEditing(null);
      load();
    } catch { showToast('Failed to save', 'error'); }
  };

  const deleteService = async (id: string) => {
    if (!confirm('Delete this service?')) return;
    try { await apiDelete('services', id); showToast('Service deleted'); load(); }
    catch { showToast('Failed to delete', 'error'); }
  };

  const updateField = (key: string, value: unknown) => setEditing((e) => e ? { ...e, [key]: value } : null);

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  if (editing) {
    return (
      <>
        <SectionHeader title={editing.id ? 'Edit Service' : 'New Service'} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Field label="Name" value={(editing.name as string) ?? ''} onChange={(v) => updateField('name', v)} />
          <Field label="Slug" value={(editing.slug as string) ?? ''} onChange={(v) => updateField('slug', v)} />
          <Field label="Duration" value={(editing.duration as string) ?? ''} onChange={(v) => updateField('duration', v)} />
          <Field label="Price" value={(editing.price as string) ?? ''} onChange={(v) => updateField('price', v)} />
          <Field label="Location" value={(editing.location as string) ?? ''} onChange={(v) => updateField('location', v)} />
          <Field label="Subtitle" value={(editing.subtitle as string) ?? ''} onChange={(v) => updateField('subtitle', v)} />
          <div className="md:col-span-2">
            <Field label="Description" value={(editing.description as string) ?? ''} onChange={(v) => updateField('description', v)} rows={3} />
          </div>
          <Field label="Image URL" value={(editing.image_url as string) ?? ''} onChange={(v) => updateField('image_url', v)} />
          <Field label="Sort Order" value={String((editing.sort_order as number) ?? 0)} onChange={(v) => updateField('sort_order', parseInt(v) || 0)} />
        </div>
        <div className="flex gap-3 mt-6">
          <Btn onClick={saveService}>Save</Btn>
          <Btn onClick={() => setEditing(null)} variant="ghost">Cancel</Btn>
        </div>
      </>
    );
  }

  return (
    <>
      <SectionHeader title="Services" subtitle="Manage your service offerings" />
      <Btn onClick={() => setEditing({ slug: '', name: '', duration: '', price: '', location: 'Regent Park Road', subtitle: '', description: '', image_url: '', sort_order: services.length, show_on_homepage: false })} className="mb-6">
        + New Service
      </Btn>
      <div className="space-y-2">
        {services.map((s) => (
          <div key={s.id as string} className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded hover:border-white/10 transition-colors">
            <div className="w-16 h-12 relative rounded overflow-hidden flex-shrink-0 bg-white/5">
              {(s.image_url as string) ? <Image src={s.image_url as string} alt="" fill className="object-cover" sizes="64px" /> : null}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">{s.name as string}</div>
              <div className="text-xs text-white/30">{s.duration as string} · {(s.price as string) || 'Quote'}</div>
            </div>
            <Btn onClick={() => setEditing(s)} variant="ghost">Edit</Btn>
            <Btn onClick={() => deleteService(s.id as string)} variant="danger">Delete</Btn>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Portfolio ── */
function PortfolioTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [images, setImages] = useState<AdminRecord[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const [newAlt, setNewAlt] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try { setImages(await apiGet('portfolio_images')); } catch { showToast('Failed to load', 'error'); }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const add = async () => {
    if (!newUrl.trim()) return;
    try {
      await apiPost('portfolio_images', { image_url: newUrl, alt: newAlt || '', aspect: 'portrait', sort_order: images.length });
      setNewUrl(''); setNewAlt('');
      showToast('Image added');
      load();
    } catch { showToast('Failed to add', 'error'); }
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this image?')) return;
    try { await apiDelete('portfolio_images', id); showToast('Deleted'); load(); }
    catch { showToast('Failed', 'error'); }
  };

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  return (
    <>
      <SectionHeader title="Portfolio" subtitle={`${images.length} images`} />
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-6">
        {images.map((img) => (
          <div key={img.id as string} className="relative group aspect-[3/4] bg-white/5 rounded overflow-hidden">
            <Image src={img.image_url as string} alt={(img.alt as string) || ''} fill className="object-cover" sizes="150px" />
            <button onClick={() => remove(img.id as string)}
              className="absolute top-1 right-1 w-5 h-5 bg-red-600 rounded-full text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">×</button>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="Image URL"
          className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-red-500" />
        <input value={newAlt} onChange={(e) => setNewAlt(e.target.value)} placeholder="Alt text"
          className="w-40 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-red-500" />
        <Btn onClick={add}>Add</Btn>
      </div>
    </>
  );
}

/* ── Albums ── */
function AlbumsTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [albums, setAlbums] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try { setAlbums(await apiGet('albums')); } catch { showToast('Failed to load', 'error'); }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  return (
    <>
      <SectionHeader title="Photo Albums" subtitle={`${albums.length} albums`} />
      <div className="space-y-3">
        {albums.map((a) => (
          <div key={a.id as string} className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded">
            <div className="w-20 h-14 relative rounded overflow-hidden flex-shrink-0 bg-white/5">
              {(a.cover_image_url as string) ? <Image src={a.cover_image_url as string} alt="" fill className="object-cover" sizes="80px" /> : null}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{a.title as string}</div>
              <div className="text-xs text-white/30">{a.date as string} · {((a.images as string[]) ?? []).length} photos</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Testimonials ── */
function TestimonialsTab({ showToast }: { showToast: (m: string, t?: 'success' | 'error') => void }) {
  const [items, setItems] = useState<AdminRecord[]>([]);
  const [editing, setEditing] = useState<AdminRecord | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try { setItems(await apiGet('testimonials')); } catch { showToast('Failed to load', 'error'); }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    if (!editing) return;
    try {
      if (editing.id) {
        const { id, created_at, ...record } = editing;
        await apiPut('testimonials', id as string, record);
      } else {
        await apiPost('testimonials', editing);
      }
      showToast('Saved');
      setEditing(null);
      load();
    } catch { showToast('Failed', 'error'); }
  };

  const remove = async (id: string) => {
    if (!confirm('Delete?')) return;
    try { await apiDelete('testimonials', id); showToast('Deleted'); load(); }
    catch { showToast('Failed', 'error'); }
  };

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  if (editing) {
    return (
      <>
        <SectionHeader title={editing.id ? 'Edit Testimonial' : 'New Testimonial'} />
        <Field label="Quote" value={(editing.quote as string) ?? ''} onChange={(v) => setEditing((e) => e ? { ...e, quote: v } : null)} rows={4} />
        <Field label="Client Name" value={(editing.name as string) ?? ''} onChange={(v) => setEditing((e) => e ? { ...e, name: v } : null)} />
        <Field label="Event" value={(editing.event as string) ?? ''} onChange={(v) => setEditing((e) => e ? { ...e, event: v } : null)} />
        <div className="flex gap-3 mt-4">
          <Btn onClick={save}>Save</Btn>
          <Btn onClick={() => setEditing(null)} variant="ghost">Cancel</Btn>
        </div>
      </>
    );
  }

  return (
    <>
      <SectionHeader title="Testimonials" subtitle="Client quotes displayed on the homepage" />
      <Btn onClick={() => setEditing({ quote: '', name: '', event: '', sort_order: items.length })} className="mb-6">+ New Testimonial</Btn>
      <div className="space-y-3">
        {items.map((t) => (
          <div key={t.id as string} className="p-4 bg-white/[0.02] border border-white/5 rounded">
            <p className="text-white/70 text-sm italic mb-2">&ldquo;{(t.quote as string).substring(0, 120)}...&rdquo;</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/40">— {t.name as string}</div>
              <div className="flex gap-2">
                <Btn onClick={() => setEditing(t)} variant="ghost">Edit</Btn>
                <Btn onClick={() => remove(t.id as string)} variant="danger">Delete</Btn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Messages (Contact Submissions) ── */
function MessagesTab() {
  const [messages, setMessages] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet('contact_submissions').then(setMessages).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white/30 text-sm">Loading...</p>;

  return (
    <>
      <SectionHeader title="Contact Messages" subtitle={`${messages.length} submissions`} />
      {messages.length === 0 ? (
        <p className="text-white/30 text-sm">No messages yet.</p>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div key={m.id as string} className="p-4 bg-white/[0.02] border border-white/5 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-medium text-white">{m.first_name as string} {(m.last_name as string) ?? ''}</div>
                  <a href={`mailto:${m.email as string}`} className="text-xs text-red-400 hover:underline">{m.email as string}</a>
                </div>
                <div className="text-[10px] text-white/20">{new Date(m.created_at as string).toLocaleDateString()}</div>
              </div>
              {(m.message as string) ? <p className="text-white/50 text-sm">{m.message as string}</p> : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
