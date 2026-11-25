export function hasTrustedAdminRole(appMetadata: Record<string, unknown> | null | undefined): boolean {
  if (!appMetadata) return false
  if (appMetadata.role === 'admin') return true
  return Array.isArray(appMetadata.roles) && appMetadata.roles.includes('admin')
}
