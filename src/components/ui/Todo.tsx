import React from 'react'

// Markiert rechtlich ungeklärte oder fehlende Angaben, die vor der Veröffentlichung geprüft werden müssen.
export const Todo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-amber-100 text-amber-900 px-4 rounded-xs font-medium">[ZU PRÜFEN: {children}]</span>
)
