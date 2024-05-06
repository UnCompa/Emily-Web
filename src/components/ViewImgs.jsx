import { useEffect, useState } from 'react'
import { allImgs } from '../utils/apiImagenes'
import CardImg from './CardImg'

export default function ViewImgs() {
  const [data, setData] = useState([])
  useEffect(() => {
    const loadData = async() => {
      const data = await allImgs()
      setData(data)
    }
    loadData()
  }, [])
  
  return (
    <>
      {
        data.map((img) => {
          console.log(img);
          return (
            <>
            <CardImg id={img.id} url={img.url} name={img.name} description={img.description} date={{create: img.createdAt, update: img.updatedAt}}/>
            </>
          )
        })
      }
    </>
  )
}
