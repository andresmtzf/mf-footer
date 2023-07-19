import { Footer } from './components/Footer'

export default function Root(props) {
  return (
    <>
      {/* {props.name} is mounted! */}
      <Footer name={`${props.name}`}></Footer>
    </>
  )
}
