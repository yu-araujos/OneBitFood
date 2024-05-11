export default function toCurrency(value: any) {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return formatter.format(value)
}