import { StyleSheet } from 'react-native'

export default function processTheme(theme = {}) {
  return Object.keys(theme).reduce((result, key) => {
    let value = theme[key]
    if (key.toLowerCase().endsWith('color')) {
      value = StyleSheet.processColor(value)
    }
    return { ...result, [key]: value }
  }, {})
}
