import React from 'react'
import { useQuery } from '@apollo/client'
import { PageHeader, Table } from 'vtex.styleguide'

import GET_KEYWORD_PAGES from '../../../graphql/queries/getKeywordPages.graphql'
import type { KeywordPage } from '../../typings/keywordPage'

const KeywordPagesList = () => {
  const { data, loading } =
    useQuery<{ keywordPages: KeywordPage[] }>(GET_KEYWORD_PAGES)

  if (loading) return <div>Carregando...</div>

  return (
    <div className="pa5">
      <PageHeader
        title="Keyword Pages"
        linkLabel="Criar nova"
        onLinkClick={() => (window.location.href = '/admin/keyword-pages/edit')}
      />
      <Table
        schema={{
          properties: {
            slug: { title: 'Slug' },
            title: { title: 'Título' },
            description: { title: 'Descrição' },
          },
        }}
        items={data?.keywordPages ?? []}
        onRowClick={({ rowData }) =>
          (window.location.href = `/admin/keyword-pages/edit?id=${rowData.id}`)
        }
      />
    </div>
  )
}

export default KeywordPagesList
