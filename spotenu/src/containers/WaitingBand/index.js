import React from 'react'
import * as S from './style'

const WaitingBand = () => {
  return (
    <S.MainWrapper>
      <S.GridWrapper>
        <S.PaperWrapper>
          <S.TitleWrapper>
            Bem vindos,
          </S.TitleWrapper>
          <S.Paragraph>
            Obrigado por voces terem se cadastrados, 
            fiquem ligados que logo, logo um Administrador irá 
            analisar o seu cadastro para vocês terem acesso a todos 
            os nossos serviços voltados especialmente para as bandas 
            que são aceitas aqui no site. Muito Obrigado !
          </S.Paragraph>
        </S.PaperWrapper>
      </S.GridWrapper>
    </S.MainWrapper>
  )
}

export default WaitingBand