import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Heading } from './components/heading/Heading'
import { Paragraph } from './components/paragraph/Paragraph'
import { SingleFrame } from './components/single-frame/single-frame'
import styles from './top.module.scss'

const ColorMapsTitle = (props: { color: string; description: string }) => {
  return (
    <div className={styles['color-maps-tile']}>
      <div className={`${styles['color-maps-tile-color']} ${styles[props.color]}`}></div>
      <div>{props.color}</div>
    </div>
  )
}

const ColorMaps = () => {
  const colors = [
    { color: 'suoh', description: 'For Primary Theme Color' },
    { color: 'kompeki', description: 'For Secondary Theme Color' },
    { color: 'moegi', description: 'For Tertiary Theme Color' },
    { color: 'suoh-lighten', description: 'Suoh Lighten' },
    { color: 'kompeki-lighten', description: 'Kompeki Lighten' },
    { color: 'moegi-lighten', description: 'Moegi Lighten' },
    { color: 'accents-1', description: '' },
    { color: 'accents-2', description: '' },
    { color: 'accents-3', description: '' },
    { color: 'accents-4', description: '' },
    { color: 'accents-5', description: '' },
    { color: 'accents-6', description: '' },
    { color: 'accents-7', description: '' },
    { color: 'accents-8', description: '' }
  ]
  const tiles = colors.map((color) => {
    return <ColorMapsTitle color={color.color} description={color.description} />
  })
  return <div className={styles['color-maps']}>{tiles}</div>
}

export const Top = () => {
  return (
    <>
      <Header />
      <SingleFrame>
        <Heading type="h2">Color</Heading>
        <Paragraph>Colors are available as .ts and .scss. Samples are below.</Paragraph>
        <div>
          <ColorMaps />
        </div>
        <Heading type="h2">Font</Heading>
        <Heading type="h2">Mixin</Heading>
        <Heading type="h2">ClassName Bundler</Heading>
      </SingleFrame>
      <Footer />
    </>
  )
}
