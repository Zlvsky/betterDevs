import { IChildren } from '@/types/components.types'

export default function BigContainer({ children }: IChildren) {
  return <main className="mx-auto w-full max-w-7xl md:px-4">{children}</main>
}
