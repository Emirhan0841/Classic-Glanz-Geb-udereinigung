// Kennzeichnet die Website als vorläufige Vorschau. Gesteuert über VITE_SITE_STATUS in netlify.toml.
export const PreviewBanner = () => {
  if (import.meta.env.VITE_SITE_STATUS !== 'preview') return null

  return (
    <div role="status" className="bg-amber-100 text-amber-900 text-sm text-center px-16 py-8">
      Vorschau: Diese Website ist eine vorläufige Kundenvorschau und noch nicht final veröffentlicht.
    </div>
  )
}
