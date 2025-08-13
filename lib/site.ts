export const WHATSAPP_NUMBER = '5518996594458' // DDI + DDD + número

export function waLink(message = 'Olá! Vim pelo site e quero um orçamento para meu casamento.') {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
