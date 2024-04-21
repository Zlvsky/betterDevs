import Header from '@/components/header/Header'
import BigContainer from '@/components/layout/BigContainer'
import PageWrap from '@/components/layout/PageWrap'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrap>
      <Header />
      <BigContainer>{children}</BigContainer>
    </PageWrap>
  )
}
