/**
 * Illustrations keyed by the stable normalized vocabulary ID (for example,
 * `ipa-w21`). Vite resolves the paths at build time, while the browser only
 * requests an image when the matching word is shown in the study view.
 */
const illustrationFiles = import.meta.glob<string>(
  '../assets/vocabulary-illustrations/ipa-w*.jpg',
  { eager: true, import: 'default' }
)

export const vocabularyImageManifest: Record<string, string> = Object.fromEntries(
  Object.entries(illustrationFiles).flatMap(([path, imageUrl]) => {
    const match = path.match(/\/(ipa-w\d+)\.jpg$/)
    return match ? [[match[1], imageUrl]] : []
  })
)
