import React from 'react'
import Link from 'components/link'
import {css} from '@emotion/core'
import theme from '../../../config/theme'
import {fonts} from '../../lib/typography'
import {bpMaxMD} from '../../lib/breakpoints'

export default function PodcastList({data}) {
  return (
    <ul
      css={css({
        margin: 0,
        listStyle: 'none',
        marginLeft: -20,
        [bpMaxMD]: {
          marginLeft: 0,
        },
      })}
    >
      {data.nodes.map(episode => (
        <li
          key={episode.id}
          css={css({
            marginBottom: 10,
          })}
        >
          <Link
            to={`/${episode.fields.slug}`}
            activeClassName="active"
            css={css({
              h4: {
                fontSize: '18px',
                fontFamily: fonts.semibold,
                lineHeight: 1.3,
                display: 'inline-block',
                margin: 0,
                marginBottom: 6,
              },
              lineHeight: 1.25,
              display: 'flex',
              alignItems: 'flex-start',
              height: '100%',
              padding: '13px 17px',
              color: theme.colors.body_color,
              borderRadius: 3,
              overflow: 'none',
              borderLeft: '3px solid',
              borderColor: theme.colors.bg_color,
              '&.active': {
                borderLeft: '3px solid',
                borderColor: theme.brand.primary,
                h4: {color: theme.brand.primary},
                background: 'white',
                boxShadow: '0 10px 25px -10px rgba(0,0,0,0.15)',
                ':hover': {
                  borderColor: theme.brand.primary,
                },
              },
              ':hover': {
                color: theme.colors.body_color,
                borderColor: 'white',
                background: 'white',
                boxShadow: '0 10px 25px -10px rgba(0,0,0,0.15)',
              },

              small: {
                opacity: 0.6,
              },
              img: {
                minWidth: 48,
                height: 48,
                borderRadius: '50%',
                margin: 0,
              },
            })}
          >
            <img
              width="40"
              height="40"
              src={episode.image_url}
              alt={episode.title}
            />
            <div css={css({marginLeft: 15})}>
              <h4>
                {episode.title}
                <small css={css({marginLeft: 5})}>E{episode.number}</small>
              </h4>
              <small>{episode.description}</small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
