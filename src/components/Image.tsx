import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import Imgix from 'react-imgix'
import mdToHTML from '../utils/mdToHTML'
import { Align, Atoms } from './designSystem/designSystem'

interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
}

interface ImageProps extends FigureProps {
  align?: 'left' | 'right'
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
}

const Figure = styled('figure')<FigureProps>(
  ({ margin, responsive }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  writing-mode: horizontal-tb;
  margin-bottom: ${margin ? Atoms.spacing.medium : 0};

  img {
    display: block;
    width: ${responsive ? '100%' : 'auto'};
    flex: 1 1 auto;
    order: 2;
  }

  figcaption {
    order: 3;
    margin-top: ${Atoms.spacing.xxsmall};
  }
`
)

const Caption = styled('figcaption')`
  font-size: ${Atoms.font.size.small};
  color: var(--meta-color, ${Atoms.colors.meta});
  letter-spacing: 0.025em;
`

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  className,
  caption,
  defaultSize = Atoms.widths.container,
  invertInDarkMode = false,
  responsive = true,
  margin = true,
  src,
}) => {
  let Wrapper
  let sizes

  switch (align) {
    case 'left':
      Wrapper = Align.Left
      break
    case 'right':
      Wrapper = Align.Right
      break
    default:
      Wrapper = React.Fragment
  }

  switch (align) {
    case 'left':
    case 'right':
      sizes = `
        (min-width: ${Atoms.breakpoints.medium}) calc(${Atoms.widths.container} * .5),
        (min-width: ${Atoms.breakpoints.narrow}) calc(${Atoms.widths.container} * .4),
        ${defaultSize}`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${Atoms.widths.container}, ${defaultSize}`
  }

  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT'
      ? `${process.env.PUBLIC_URL || ''}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const img = responsive ? (
    <Imgix
      src={url}
      htmlAttributes={{
        alt,
        loading: 'lazy',
      }}
      sizes={sizes}
      css={
        invertInDarkMode && {
          '@media (prefers-color-scheme: dark)': {
            filter: 'invert(100%) hue-rotate(180deg)',
          },
        }
      }
    />
  ) : (
    <img alt={alt} src={url} />
  )

  return (
    <Wrapper>
      <Figure className={className} margin={margin} responsive={responsive}>
        {img}
        {caption && <Caption>{mdToHTML(caption)}</Caption>}
      </Figure>
    </Wrapper>
  )
}

export default Image
