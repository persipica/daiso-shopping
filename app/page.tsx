import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button className="bg-red-500">버튼</Button>
      <Button>button</Button>
      <br />
      <Button variant="destructive">button-destructive</Button>
      <Button variant="destructive" size="lg">
        button-default1
      </Button>
      <Button variant="secondary" size="sm">
        button-secondary
      </Button>
    </div>
  )
}
