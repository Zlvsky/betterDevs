import { IChildren } from '@/types/components.types'
import { memo } from 'react'

interface IProps extends IChildren {
  children: React.ReactNode
  isGradient?: boolean
}

const PageWrap = memo(({ children, isGradient }: IProps) => {
  return (
    <div id="pagewrap" className={`flex h-full w-full flex-col items-center`}>
      {children}
    </div>
  )
})

PageWrap.displayName = 'PageWrap'

export default PageWrap
